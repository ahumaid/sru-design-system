import { i18n } from '../i18n.js';

const root = document.documentElement;
const boundToastButtons = new WeakSet();
const boundRangeInputs = new WeakSet();
const boundValidationForms = new WeakSet();

const voidElements = new Set([
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr',
]);
const blockElements = new Set([
    'address', 'article', 'aside', 'blockquote', 'body', 'caption', 'dd', 'details', 'dialog', 'div', 'dl', 'dt',
    'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'li',
    'main', 'nav', 'ol', 'optgroup', 'option', 'p', 'pre', 'section', 'select', 'summary', 'table', 'tbody',
    'td', 'tfoot', 'th', 'thead', 'tr', 'ul',
]);

const openingTag = (element) => {
    const serialized = element.outerHTML;
    let quote = '';
    for (let index = 1; index < serialized.length; index += 1) {
        const character = serialized[index];
        if (quote) {
            if (character === quote) quote = '';
        } else if (character === '"' || character === "'") {
            quote = character;
        } else if (character === '>') {
            return serialized.slice(0, index + 1);
        }
    }
    return `<${element.localName}>`;
};

const escapeText = (value) => value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

const formatNode = (node, depth = 0) => {
    if (node.nodeType === Node.TEXT_NODE) return escapeText(node.nodeValue);
    if (node.nodeType === Node.COMMENT_NODE) return `<!--${node.nodeValue}-->`;
    if (node.nodeType !== Node.ELEMENT_NODE) return '';

    const tagName = node.localName;
    const startTag = openingTag(node);
    if (voidElements.has(tagName)) return startTag;

    const children = Array.from(node.childNodes);
    const hasMeaningfulText = children.some((child) => (
        child.nodeType === Node.TEXT_NODE && child.nodeValue.trim().length > 0
    ));
    const formattedChildren = blockElements.has(tagName)
        && !hasMeaningfulText
        && children.some((child) => child.nodeType === Node.ELEMENT_NODE || child.nodeType === Node.COMMENT_NODE);

    if (!formattedChildren) return `${startTag}${node.innerHTML}</${tagName}>`;

    const indent = '  '.repeat(depth);
    const childIndent = '  '.repeat(depth + 1);
    const content = children
        .filter((child) => !(child.nodeType === Node.TEXT_NODE && !child.nodeValue.trim()))
        .map((child) => `${childIndent}${formatNode(child, depth + 1)}`)
        .join('\n');

    return `${startTag}\n${content}\n${indent}</${tagName}>`;
};

const formatHtml = (element) => Array.from(element.childNodes)
    .filter((child) => !(child.nodeType === Node.TEXT_NODE && !child.nodeValue.trim()))
    .map((child) => formatNode(child))
    .join('\n');

const appendSyntaxToken = (parent, className, value) => {
    const token = document.createElement('span');
    token.className = className;
    token.textContent = value;
    parent.append(token);
};

const appendTag = (code, source) => {
    const match = source.match(/^<(\/?)\s*([\w:-]+)([\s\S]*?)(\/?)>$/);
    if (!match) {
        code.append(document.createTextNode(source));
        return;
    }

    const [, closingSlash, tagName, attributes, selfClosingSlash] = match;
    appendSyntaxToken(code, 'syntax-punctuation', `<${closingSlash}`);
    appendSyntaxToken(code, 'syntax-tag', tagName);

    const attributePattern = /(\s*)([^\s=/>]+)(\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?/g;
    let cursor = 0;
    let attribute;
    while ((attribute = attributePattern.exec(attributes))) {
        if (attribute.index > cursor) {
            code.append(document.createTextNode(attributes.slice(cursor, attribute.index)));
        }
        code.append(document.createTextNode(attribute[1]));
        appendSyntaxToken(code, 'syntax-attribute', attribute[2]);
        if (attribute[3]) {
            const equalsIndex = attribute[3].indexOf('=');
            code.append(document.createTextNode(attribute[3].slice(0, equalsIndex + 1)));
            const value = attribute[3].slice(equalsIndex + 1);
            const leadingSpace = value.match(/^\s*/)[0];
            code.append(document.createTextNode(leadingSpace));
            appendSyntaxToken(code, 'syntax-value', value.slice(leadingSpace.length));
        }
        cursor = attributePattern.lastIndex;
    }
    if (cursor < attributes.length) {
        code.append(document.createTextNode(attributes.slice(cursor)));
    }

    appendSyntaxToken(code, 'syntax-punctuation', `${selfClosingSlash}>`);
};

const highlightHtml = (code, source) => {
    let cursor = 0;
    while (cursor < source.length) {
        const nextTag = source.indexOf('<', cursor);
        if (nextTag === -1) {
            code.append(document.createTextNode(source.slice(cursor)));
            break;
        }
        if (nextTag > cursor) {
            code.append(document.createTextNode(source.slice(cursor, nextTag)));
        }

        if (source.startsWith('<!--', nextTag)) {
            const commentEnd = source.indexOf('-->', nextTag + 4);
            const end = commentEnd === -1 ? source.length : commentEnd + 3;
            appendSyntaxToken(code, 'syntax-comment', source.slice(nextTag, end));
            cursor = end;
            continue;
        }

        let quote = '';
        let end = nextTag + 1;
        for (; end < source.length; end += 1) {
            const character = source[end];
            if (quote) {
                if (character === quote) quote = '';
            } else if (character === '"' || character === "'") {
                quote = character;
            } else if (character === '>') {
                end += 1;
                break;
            }
        }

        if (source[end - 1] !== '>') {
            code.append(document.createTextNode(source.slice(nextTag)));
            break;
        }
        appendTag(code, source.slice(nextTag, end));
        cursor = end;
    }
};

const addClassReferences = () => {
    document.querySelectorAll('.showcase-panel:not(.icon-gallery-panel):not(.has-class-reference)').forEach((panel) => {
        const snippet = formatHtml(panel).trim();
        const reference = document.createElement('details');
        reference.className = 'class-reference';
        reference.dataset.classReference = 'true';

        const summary = document.createElement('summary');
        summary.textContent = i18n.global.t('app.snippet');
        const editor = document.createElement('div');
        editor.className = 'html-editor';

        const toolbar = document.createElement('div');
        toolbar.className = 'html-editor-toolbar';
        toolbar.innerHTML = '<span class="html-editor-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="html-editor-filename">snippet.html</span><span class="html-editor-language">HTML</span>';

        const pre = document.createElement('pre');
        const code = document.createElement('code');
        highlightHtml(code, snippet);
        pre.append(code);
        editor.append(toolbar, pre);
        reference.append(summary, editor);
        panel.classList.add('has-class-reference');
        panel.append(reference);
    });
};

const refreshClassReferences = () => {
    document.querySelectorAll('.class-reference').forEach((reference) => {
        reference.closest('.showcase-panel')?.classList.remove('has-class-reference');
        reference.remove();
    });
    addClassReferences();
};

export const setLocale = (locale) => {
    i18n.global.locale.value = locale;
    root.lang = locale;
    document.title = i18n.global.t('app.title');
    document.querySelector('meta[name="description"]')?.setAttribute('content', i18n.global.t('app.description'));
    refreshClassReferences();

    if (globalThis.bootstrap) {
        [
            ['[data-bs-toggle="tooltip"]', globalThis.bootstrap.Tooltip],
            ['[data-bs-toggle="popover"]', globalThis.bootstrap.Popover],
        ].forEach(([selector, Component]) => {
            document.querySelectorAll(selector).forEach((element) => {
                Component.getInstance(element)?.dispose();
                Component.getOrCreateInstance(element);
            });
        });
    }
};

export const initializeGalleryPage = (locale) => {
    setLocale(locale);

    if (globalThis.bootstrap) {
        const toastElement = document.querySelector('#demo-toast');
        const toastButton = document.querySelector('#show-toast');
        if (toastButton && !boundToastButtons.has(toastButton)) {
            toastButton.addEventListener('click', () => {
                if (toastElement) globalThis.bootstrap.Toast.getOrCreateInstance(toastElement).show();
            });
            boundToastButtons.add(toastButton);
        }

        const scrollspyElement = document.querySelector('#scrollspy-content');
        if (scrollspyElement) {
            globalThis.bootstrap.ScrollSpy.getOrCreateInstance(scrollspyElement, {
                target: '#scrollspy-nav',
            }).refresh();
        }
    }

    const rangeInput = document.querySelector('#demo-range');
    if (rangeInput && !boundRangeInputs.has(rangeInput)) {
        rangeInput.addEventListener('input', (event) => {
            const value = document.querySelector('#range-value');
            if (value) value.textContent = event.currentTarget.value;
        });
        boundRangeInputs.add(rangeInput);
    }

    const validationForm = document.querySelector('#validation-form');
    if (validationForm && !boundValidationForms.has(validationForm)) {
        validationForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const form = event.currentTarget;
            form.classList.add('was-validated');
            if (form.checkValidity()) form.querySelector('button[type="submit"]')?.blur();
        });
        boundValidationForms.add(validationForm);
    }
};
