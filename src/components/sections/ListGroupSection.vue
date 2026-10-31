<template>
<section class="gallery-section" id="list-group" aria-labelledby="list-title">
            <div class="gallery-section-heading"><p class="eyebrow">14 · Content</p><h2 id="list-title">List group</h2></div>
            <div class="row g-4">
              <div class="col-md-6"><div class="list-group"><RouterLink to="/components/alerts" class="list-group-item list-group-item-action active" aria-current="true"><div class="d-flex w-100 justify-content-between"><strong>Active item</strong><small>Now</small></div><span class="small">With supporting text below.</span></RouterLink><RouterLink to="/components/forms" class="list-group-item list-group-item-action">A second actionable item</RouterLink><RouterLink to="/components/tables" class="list-group-item list-group-item-action">A third actionable item</RouterLink></div></div>
              <div class="col-md-6"><ul class="list-group"><li class="list-group-item d-flex justify-content-between align-items-center">Inbox<span class="badge text-bg-primary rounded-pill">12</span></li><li class="list-group-item d-flex justify-content-between align-items-center">Requests<span class="badge text-bg-success rounded-pill">3</span></li><li class="list-group-item disabled" aria-disabled="true">Archived (disabled)</li></ul></div>
            </div>
          </section>
</template>
