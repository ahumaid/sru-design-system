<template>
<section class="gallery-section" id="helpers" aria-labelledby="helpers-title">
            <div class="gallery-section-heading"><p class="eyebrow">28 · Layout</p><h2 id="helpers-title">Helpers and utilities</h2><p class="text-secondary">Common helpers keep layouts responsive without adding one-off CSS.</p></div>
            <div class="row g-4">
              <div class="col-md-6"><div class="showcase-panel"><h3 class="h5">Responsive ratio</h3><div class="ratio ratio-16x9 ratio-demo rounded overflow-hidden"><div class="d-flex align-items-center justify-content-center bg-primary text-white">16:9 content</div></div><RouterLink to="/components/helpers" class="stretched-link visually-hidden">Example stretched link</RouterLink></div></div>
              <div class="col-md-6"><div class="showcase-panel"><h3 class="h5">Stacks and text utilities</h3><div class="vstack gap-2"><div class="p-2 border rounded">Vertical stack item one</div><div class="p-2 border rounded">Vertical stack item two</div></div><hr><div class="hstack gap-3"><div class="p-2 border rounded">Left item</div><div class="vr"></div><div class="p-2 border rounded">Right item</div></div><p class="text-truncate mt-3 mb-0" style="max-width: 24rem">This line demonstrates text truncation when a long label does not fit in its container.</p></div></div>
              <div class="col-md-6"><div class="showcase-panel"><h3 class="h5">Visually hidden and focus ring</h3><button class="btn btn-primary">Visible action <span class="visually-hidden">for assistive technology</span></button><p class="small text-secondary mt-3 mb-0">Tab through the page to see the shared focus ring.</p></div></div>
              <div class="col-md-6"><div class="showcase-panel"><h3 class="h5">Image and figure</h3><figure class="mb-0"><div class="figure-demo rounded" role="img" aria-label="Abstract purple and blue university brand illustration"></div><figcaption class="figure-caption mt-2">Figure caption · images scale to their container.</figcaption></figure></div></div>
            </div>
          </section>
</template>
