import { i18n } from '../i18n.js';
import { createVNode, render } from 'vue';
import HtmlSnippet from '../components/HtmlSnippet.vue';

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

const addClassReferences = () => {
    document.querySelectorAll('.showcase-panel:not(.icon-gallery-panel):not(.has-class-reference)').forEach((panel) => {
        const snippet = formatHtml(panel).trim();
        const snippetMount = document.createElement('div');
        snippetMount.className = 'w-100';
        snippetMount.dataset.htmlSnippetMount = 'true';
        render(createVNode(HtmlSnippet, {
            code: snippet,
            label: i18n.global.t('app.snippet'),
        }), snippetMount);
        panel.classList.add('has-class-reference');
        panel.append(snippetMount);
    });
};

const refreshClassReferences = () => {
    document.querySelectorAll('[data-html-snippet-mount]').forEach((snippetMount) => {
        snippetMount.closest('.showcase-panel')?.classList.remove('has-class-reference');
        render(null, snippetMount);
        snippetMount.remove();
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
