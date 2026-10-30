import './styles/gallery.scss';

const root = document.documentElement;
const themeStylesheet = document.querySelector('#theme-css');
const directionToggle = document.querySelector('#direction-toggle');
const themeToggle = document.querySelector('#theme-toggle');

directionToggle?.addEventListener('click', () => {
    const isRtl = root.dir !== 'rtl';

    root.dir = isRtl ? 'rtl' : 'ltr';
    directionToggle.setAttribute('aria-pressed', String(isRtl));
    directionToggle.textContent = isRtl ? 'Preview LTR' : 'Preview RTL';

    if (themeStylesheet) {
        themeStylesheet.href = isRtl
            ? '/design-system/sru-theme.rtl.css'
            : '/design-system/sru-theme.css';
    }
});

themeToggle?.addEventListener('click', () => {
    const isDark = root.dataset.bsTheme !== 'dark';

    root.dataset.bsTheme = isDark ? 'dark' : 'light';
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.textContent = isDark ? 'Light preview' : 'Dark preview';
});

if (globalThis.bootstrap) {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((element) => {
        bootstrap.Tooltip.getOrCreateInstance(element);
    });

    document.querySelectorAll('[data-bs-toggle="popover"]').forEach((element) => {
        bootstrap.Popover.getOrCreateInstance(element);
    });

    const toastElement = document.querySelector('#demo-toast');
    const toastButton = document.querySelector('#show-toast');

    toastButton?.addEventListener('click', () => {
        if (toastElement) {
            bootstrap.Toast.getOrCreateInstance(toastElement).show();
        }
    });

    const scrollspyElement = document.querySelector('#scrollspy-content');

    if (scrollspyElement) {
        bootstrap.ScrollSpy.getOrCreateInstance(scrollspyElement, {
            target: '#scrollspy-nav',
        }).refresh();
    }
}

document.querySelector('#demo-range')?.addEventListener('input', (event) => {
    const value = document.querySelector('#range-value');

    if (value) {
        value.textContent = event.currentTarget.value;
    }
});

document.querySelector('#validation-form')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    form.classList.add('was-validated');

    if (form.checkValidity()) {
        form.querySelector('button[type="submit"]')?.blur();
    }
});
