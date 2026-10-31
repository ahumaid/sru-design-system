<template>
<section class="gallery-section" id="installation" aria-labelledby="installation-title">
            <div class="gallery-section-heading">
              <p class="eyebrow">Guide · 03</p>
              <h2 id="installation-title">Install on a website</h2>
              <p class="text-secondary">Add the hosted stylesheet in the page head. Use the RTL file for Arabic pages and add the JavaScript bundle when interactive components need it.</p>
            </div>
            <div class="card"><div class="card-body">
              <h3 class="h6">LTR stylesheet</h3>
              <pre class="guide-code"><code>&lt;link rel="stylesheet" href="https://&lt;design-system-domain&gt;/design-system/sru-theme.css"&gt;</code></pre>
              <h3 class="h6 mt-4">RTL stylesheet</h3>
              <pre class="guide-code"><code>&lt;link rel="stylesheet" href="https://&lt;design-system-domain&gt;/design-system/sru-theme.rtl.css"&gt;</code></pre>
              <h3 class="h6 mt-4">Optional JavaScript</h3>
              <pre class="guide-code"><code>&lt;script defer src="https://&lt;design-system-domain&gt;/design-system/bootstrap.bundle.js"&gt;&lt;/script&gt;</code></pre>
              <h3 class="h6 mt-4">Lucide icons</h3>
              <p>Load Lucide when the page uses icons, then call <code>lucide.createIcons()</code> after the elements with <code>data-lucide</code> are in the page.</p>
              <pre class="guide-code"><code>&lt;script src="https://unpkg.com/lucide@latest"&gt;&lt;/script&gt;
&lt;button class="btn btn-primary" type="button"&gt;
  &lt;i data-lucide="search" aria-hidden="true"&gt;&lt;/i&gt;
  Search
&lt;/button&gt;
&lt;script&gt;lucide.createIcons();&lt;/script&gt;</code></pre>
              <p class="installation-note mb-0">For Arabic or another right-to-left page, use <code>sru-theme.rtl.css</code>. The stylesheet already includes Bootstrap 5.3.8, so do not load a second Bootstrap CSS file.</p>
              <p class="small text-secondary mt-3 mb-0" id="icon-csp-note">If the page uses a Content Security Policy (CSP), allow <code>unpkg.com</code> in <code>script-src</code>.</p>
            </div></div>
          </section>
</template>
