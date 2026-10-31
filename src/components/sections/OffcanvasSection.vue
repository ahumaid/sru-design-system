<template>
<section class="gallery-section" id="offcanvas" aria-labelledby="offcanvas-title">
            <div class="gallery-section-heading"><p class="eyebrow">18 · Navigation</p><h2 id="offcanvas-title">Offcanvas</h2></div>
            <div class="showcase-panel"><p>Offcanvas panels work for navigation and secondary controls on smaller screens.</p><button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo-offcanvas" aria-controls="demo-offcanvas">Open side panel</button></div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="demo-offcanvas" aria-labelledby="demo-offcanvas-title"><div class="offcanvas-header"><h3 class="offcanvas-title h5" id="demo-offcanvas-title">Quick links</h3><button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button></div><div class="offcanvas-body"><p>Keep secondary navigation easy to find.</p><div class="list-group"><RouterLink class="list-group-item list-group-item-action" to="/components/forms">Profile</RouterLink><RouterLink class="list-group-item list-group-item-action" to="/components/alerts">Notifications</RouterLink><RouterLink class="list-group-item list-group-item-action" to="/components/tables">Reports</RouterLink></div></div></div>
          </section>
</template>
