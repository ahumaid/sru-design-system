import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import postcss from 'postcss';
import rtlcss from 'rtlcss';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ltrPath = path.join(projectRoot, 'public/design-system/sru-theme.css');
const outputMarker = '/*SRU-RTL-OVERRIDES start';
const existingCss = fs.readFileSync(ltrPath, 'utf8');
const existingOverridesIndex = existingCss.indexOf(outputMarker);
const ltrCss = existingOverridesIndex < 0 ? existingCss : existingCss.slice(0, existingOverridesIndex);
const rtlCss = rtlcss.process(ltrCss);
const ltrRoot = postcss.parse(ltrCss, { from: ltrPath });
const rtlRoot = postcss.parse(rtlCss, { from: ltrPath });
const ltrRules = [];
const rtlRules = [];

ltrRoot.walkRules((rule) => ltrRules.push(rule));
rtlRoot.walkRules((rule) => rtlRules.push(rule));

if (ltrRules.length !== rtlRules.length) {
  throw new Error(`RTL conversion changed the rule count (${ltrRules.length} LTR, ${rtlRules.length} RTL).`);
}

const overrides = postcss.root();
const clonedAtRules = new WeakMap();
const renamedKeyframes = new Map();

function declarationsByProperty(rule) {
  const declarations = new Map();
  rule.walkDecls((declaration) => {
    const values = declarations.get(declaration.prop) ?? [];
    values.push({ value: declaration.value, important: declaration.important });
    declarations.set(declaration.prop, values);
  });
  return declarations;
}

function sameValues(first = [], second = []) {
  return first.length === second.length && first.every((declaration, index) =>
    declaration.value === second[index].value && declaration.important === second[index].important);
}

function findKeyframes(rule) {
  let parent = rule.parent;
  while (parent && parent.type !== 'root') {
    if (parent.type === 'atrule' && /^(?:-\w+-)?keyframes$/i.test(parent.name)) return parent;
    parent = parent.parent;
  }
  return null;
}

function copyAtRuleChain(source, parent) {
  if (source.type === 'root') return parent;
  const clonedParent = copyAtRuleChain(source.parent, parent);
  let clone = clonedAtRules.get(source);
  if (!clone) {
    clone = source.clone({ nodes: [] });
    clonedParent.append(clone);
    clonedAtRules.set(source, clone);
  }
  return clone;
}

function scopeSelector(selector) {
  const lastPseudoElement = /(::[-\w]+|:(?:before|after|first-line|first-letter))\s*$/i.exec(selector);
  if (!lastPseudoElement) return `${selector}:where(:dir(rtl))`;
  const insertionIndex = lastPseudoElement.index;
  return `${selector.slice(0, insertionIndex)}:where(:dir(rtl))${selector.slice(insertionIndex)}`;
}

function scopeSelectorList(selectorList) {
  const selectors = [];
  let start = 0;
  let parenDepth = 0;
  let bracketDepth = 0;
  let quote = null;
  for (let index = 0; index < selectorList.length; index += 1) {
    const character = selectorList[index];
    if (quote) {
      if (character === '\\') index += 1;
      else if (character === quote) quote = null;
      continue;
    }
    if (character === '"' || character === "'") quote = character;
    else if (character === '(') parenDepth += 1;
    else if (character === ')') parenDepth -= 1;
    else if (character === '[') bracketDepth += 1;
    else if (character === ']') bracketDepth -= 1;
    else if (character === ',' && parenDepth === 0 && bracketDepth === 0) {
      selectors.push(scopeSelector(selectorList.slice(start, index).trim()));
      start = index + 1;
    }
  }
  selectors.push(scopeSelector(selectorList.slice(start).trim()));
  return selectors.join(',');
}

for (let index = 0; index < rtlRules.length; index += 1) {
  const ltrRule = ltrRules[index];
  const rtlRule = rtlRules[index];
  if (ltrRule.selector !== rtlRule.selector) {
    throw new Error(`RTL conversion changed selector order near ${ltrRule.selector} / ${rtlRule.selector}.`);
  }

  const before = declarationsByProperty(ltrRule);
  const after = declarationsByProperty(rtlRule);
  const changedProperties = new Set();
  for (const property of new Set([...before.keys(), ...after.keys()])) {
    if (!sameValues(before.get(property), after.get(property))) changedProperties.add(property);
  }
  if (changedProperties.size === 0) continue;

  const keyframes = findKeyframes(rtlRule);
  if (keyframes) {
    const name = keyframes.params.trim();
    renamedKeyframes.set(name, `${name}-rtl`);
    continue;
  }

  const overrideRule = postcss.rule({ selector: scopeSelectorList(rtlRule.selector) });
  for (const declaration of rtlRule.nodes ?? []) {
    if (declaration.type === 'decl' && changedProperties.has(declaration.prop)) {
      overrideRule.append(declaration.clone());
    }
  }
  for (const property of changedProperties) {
    if (!after.has(property)) {
      const wasImportant = (before.get(property) ?? []).some((declaration) => declaration.important);
      overrideRule.append(postcss.decl({
        prop: property,
        value: 'unset',
        important: wasImportant,
      }));
    }
  }

  copyAtRuleChain(rtlRule.parent, overrides).append(overrideRule);
}

const animationProperties = new Set(['animation', 'animation-name', '-webkit-animation', '-webkit-animation-name']);
for (let index = 0; index < ltrRules.length; index += 1) {
  const rtlRule = rtlRules[index];
  const animationDeclarations = (rtlRule.nodes ?? []).filter((declaration) => declaration.type === 'decl');
  const renamedDeclarations = animationDeclarations.map((declaration) => {
    if (!animationProperties.has(declaration.prop) && !/animation-name$/i.test(declaration.prop)) return null;
    let value = declaration.value;
    for (const [name, rtlName] of renamedKeyframes) {
      const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      value = value.replace(new RegExp(`(^|[\\s,])${escapedName}(?=$|[\\s,])`, 'g'), `$1${rtlName}`);
    }
    return value === declaration.value ? null : declaration.clone({ value });
  }).filter(Boolean);
  if (renamedDeclarations.length === 0) continue;
  const overrideRule = postcss.rule({ selector: scopeSelectorList(rtlRule.selector) });
  overrideRule.append(...renamedDeclarations);
  copyAtRuleChain(rtlRule.parent, overrides).append(overrideRule);
}

for (const [name, rtlName] of renamedKeyframes) {
  let rtlKeyframes;
  rtlRoot.walkAtRules((atRule) => {
    if (/^(?:-\w+-)?keyframes$/i.test(atRule.name) && atRule.params.trim() === name) rtlKeyframes = atRule;
  });
  if (!rtlKeyframes) throw new Error(`Could not find transformed keyframes for ${name}.`);
  const keyframes = rtlKeyframes.clone({ params: rtlName });
  copyAtRuleChain(rtlKeyframes.parent, overrides).append(keyframes);
}

if (overrides.nodes.length > 0) {
  ltrRoot.append(postcss.comment({ text: 'SRU-RTL-OVERRIDES start: enabled by dir="rtl" / تبدأ تجاوزات RTL: تُفعّل باستخدام dir="rtl"' }));
  ltrRoot.append(...overrides.nodes);
}

fs.writeFileSync(ltrPath, `${ltrRoot.toString().trimEnd()}\n`);
