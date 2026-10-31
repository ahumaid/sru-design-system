<template>
<section class="gallery-section" id="foundations" aria-labelledby="foundations-title">
            <div class="gallery-section-heading">
              <p class="eyebrow">01 · Foundations</p>
              <h2 id="foundations-title">Color and type</h2>
              <p class="text-secondary">Bootstrap contextual colors use the university palette. Cairo is the shared font for Latin and Arabic content.</p>
            </div>
            <div class="row g-3 mb-4">
              <div class="col-6 col-md-4 col-xl-3"><div class="color-tile bg-primary text-white">Primary <code>primary</code></div></div>
              <div class="col-6 col-md-4 col-xl-3"><div class="color-tile bg-secondary text-white">Secondary <code>secondary</code></div></div>
              <div class="col-6 col-md-4 col-xl-3"><div class="color-tile bg-success text-white">Success <code>success</code></div></div>
              <div class="col-6 col-md-4 col-xl-3"><div class="color-tile bg-info text-white">Information <code>info</code></div></div>
              <div class="col-6 col-md-4 col-xl-3"><div class="color-tile bg-warning text-dark">Warning <code>warning</code></div></div>
              <div class="col-6 col-md-4 col-xl-3"><div class="color-tile bg-danger text-white">Danger <code>danger</code></div></div>
              <div class="col-6 col-md-4 col-xl-3"><div class="color-tile bg-light text-dark border">Light <code>light</code></div></div>
              <div class="col-6 col-md-4 col-xl-3"><div class="color-tile bg-dark text-white">Dark <code>dark</code></div></div>
            </div>
            <div class="row g-4">
              <div class="col-xl-6">
                <div class="showcase-panel h-100">
                  <h3 class="h5">Typography scale</h3>
                  <h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3>
                  <p class="lead">Lead paragraph — a short introduction with more emphasis.</p>
                  <p>Body text for longer content. <RouterLink to="/components/buttons">Links follow the university palette</RouterLink>, and <strong>important text</strong> keeps accessible contrast.</p>
                  <p class="text-secondary mb-0">Secondary text · <small>Small supporting text</small></p>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="showcase-panel h-100">
                  <h3 class="h5">Arabic sample</h3>
                  <p lang="ar" dir="rtl" class="fs-4">جامعة سليمان الراجحي — التحول الرقمي</p>
                  <p lang="ar" dir="rtl" class="mb-0">تتبع النصوص العربية اتجاه القراءة من اليمين إلى اليسار، مع بقاء ترتيب المكونات متناسقاً.</p>
                </div>
              </div>
            </div>
          </section>
</template>
