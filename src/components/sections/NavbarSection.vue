<template>
<section class="gallery-section" id="navbar" aria-labelledby="navbar-title">
            <div class="gallery-section-heading"><p class="eyebrow">16 · Navigation</p><h2 id="navbar-title">Navbar</h2></div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary border rounded-3 px-3">
              <RouterLink class="navbar-brand fw-bold" to="/">Sulaiman AlRajhi University Portal</RouterLink><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#demo-navbar" aria-controls="demo-navbar" aria-expanded="false" aria-label="Toggle sample navbar"><span class="navbar-toggler-icon"></span></button>
              <div class="collapse navbar-collapse" id="demo-navbar"><div class="navbar-nav me-auto"><RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink><RouterLink class="nav-link" to="/components/cards">Services</RouterLink><RouterLink class="nav-link" to="/components/forms">Contact</RouterLink></div><form class="d-flex" role="search"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"><button class="btn btn-outline-primary" type="submit">Search</button></form></div>
            </nav>
          </section>
</template>
