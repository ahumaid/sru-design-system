<template>
<section class="gallery-section" id="navbar" aria-labelledby="navbar-title">
            <div class="gallery-section-heading"><p class="eyebrow">{{ $t('phrases.16-navigation') }}</p><h2 id="navbar-title">{{ $t('labels.navbar-title') }}</h2></div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary border rounded-3 px-3">
              <RouterLink class="navbar-brand fw-bold" to="/">{{ $t('phrases.sulaiman-alrajhi-university-portal') }}</RouterLink><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#demo-navbar" aria-controls="demo-navbar" aria-expanded="false" :aria-label="$t('phrases.toggle-sample-navbar')"><span class="navbar-toggler-icon"></span></button>
              <div class="collapse navbar-collapse" id="demo-navbar"><div class="navbar-nav me-auto"><RouterLink class="nav-link active" aria-current="page" to="/">{{ $t('phrases.home') }}</RouterLink><RouterLink class="nav-link" to="/components/cards">{{ $t('phrases.services') }}</RouterLink><RouterLink class="nav-link" to="/components/forms">{{ $t('phrases.contact') }}</RouterLink></div><form class="d-flex" role="search"><input class="form-control me-2" type="search" :placeholder="$t('phrases.search')" :aria-label="$t('phrases.search')"><button class="btn btn-outline-primary" type="submit">{{ $t('phrases.search') }}</button></form></div>
            </nav>
          </section>
</template>
