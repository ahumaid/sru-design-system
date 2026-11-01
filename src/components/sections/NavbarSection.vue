<template>
<section class="gallery-section" id="navbar" aria-labelledby="navbar-title">
            <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4"><p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.16-navigation') }}</p><h2 class="h3 fw-bold mb-0" id="navbar-title">{{ $t('labels.navbar-title') }}</h2></div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary border rounded-3 px-3">
              <a class="navbar-brand fw-bold" href="/#top">{{ $t('phrases.sulaiman-alrajhi-university-portal') }}</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#demo-navbar" aria-controls="demo-navbar" aria-expanded="false" :aria-label="$t('phrases.toggle-sample-navbar')"><span class="navbar-toggler-icon"></span></button>
              <div class="collapse navbar-collapse" id="demo-navbar"><div class="navbar-nav me-auto"><a class="nav-link active" aria-current="page" href="/#top">{{ $t('phrases.home') }}</a><a class="nav-link" href="/#cards">{{ $t('phrases.services') }}</a><a class="nav-link" href="/#forms">{{ $t('phrases.contact') }}</a></div><form class="d-flex" role="search"><input class="form-control me-2" type="search" :placeholder="$t('phrases.search')" :aria-label="$t('phrases.search')"><button class="btn btn-outline-primary" type="submit">{{ $t('phrases.search') }}</button></form></div>
            </nav>
          </section>
</template>
