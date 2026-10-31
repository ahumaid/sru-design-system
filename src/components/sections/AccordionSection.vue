<template>
<section class="gallery-section" id="accordion" aria-labelledby="accordion-title">
            <div class="gallery-section-heading"><p class="eyebrow">02 · Content</p><h2 id="accordion-title">Accordion</h2></div>
            <div class="showcase-panel">
              <div class="accordion" id="demo-accordion">
                <div class="accordion-item">
                  <h3 class="accordion-header"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-one" aria-expanded="true" aria-controls="accordion-one">First section</button></h3>
                  <div id="accordion-one" class="accordion-collapse collapse show" data-bs-parent="#demo-accordion"><div class="accordion-body">Accordions group related content into expandable sections. The first item starts open.</div></div>
                </div>
                <div class="accordion-item">
                  <h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-two" aria-expanded="false" aria-controls="accordion-two">Second section</button></h3>
                  <div id="accordion-two" class="accordion-collapse collapse" data-bs-parent="#demo-accordion"><div class="accordion-body">Use clear labels and preserve the built-in keyboard behavior.</div></div>
                </div>
              </div>
            </div>
          </section>
</template>
