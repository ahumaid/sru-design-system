<template>
<section class="gallery-section" id="dropdowns" aria-labelledby="dropdowns-title">
            <div class="gallery-section-heading"><p class="eyebrow">12 · Interaction</p><h2 id="dropdowns-title">Dropdowns</h2></div>
            <div class="showcase-panel d-flex flex-wrap gap-3">
              <div class="dropdown"><button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Actions</button><ul class="dropdown-menu"><li><h3 class="dropdown-header">Request</h3></li><li><RouterLink class="dropdown-item" to="/components/cards">Open details</RouterLink></li><li><RouterLink class="dropdown-item" to="/components/forms">Edit information</RouterLink></li><li><hr class="dropdown-divider"></li><li><button class="dropdown-item text-danger" type="button">Cancel request</button></li></ul></div>
              <div class="btn-group"><button type="button" class="btn btn-outline-primary">Split action</button><button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">Toggle dropdown</span></button><ul class="dropdown-menu"><li><RouterLink class="dropdown-item" to="/components/buttons">Alternative action</RouterLink></li></ul></div>
            </div>
          </section>
</template>
