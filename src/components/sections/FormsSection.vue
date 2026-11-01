<template>
<section class="gallery-section" id="forms" aria-labelledby="forms-title">
            <div class="gallery-section-heading"><p class="eyebrow">{{ $t('phrases.13-data-entry') }}</p><h2 id="forms-title">{{ $t('labels.forms-title') }}</h2><p class="text-secondary">{{ $t('copy.formDescription') }}</p></div>
            <div class="row g-4">
              <div class="col-xl-6"><div class="showcase-panel h-100">
                <h3 class="h5">{{ $t('phrases.controls-and-select') }}</h3>
                <label for="demo-name" class="form-label">{{ $t('phrases.full-name') }}</label><input id="demo-name" class="form-control mb-3" type="text" :placeholder="$t('phrases.enter-a-name')">
                <label for="demo-description" class="form-label">{{ $t('phrases.description') }}</label><textarea id="demo-description" class="form-control mb-3" rows="3" :placeholder="$t('phrases.add-a-short-description')"></textarea>
                <label for="demo-select" class="form-label">{{ $t('phrases.department') }}</label><select id="demo-select" class="form-select"><option selected>{{ $t('phrases.select-a-department') }}</option><option>{{ $t('phrases.admissions') }}</option><option>{{ $t('phrases.digital-transformation') }}</option><option>{{ $t('phrases.student-services') }}</option></select>
                <div class="form-text">{{ $t('phrases.supporting-text-explains-what-the-field-is-used-for') }}</div>
              </div></div>
              <div class="col-xl-6"><div class="showcase-panel h-100">
                <h3 class="h5">{{ $t('phrases.checks-and-radios') }}</h3>
                <div class="form-check mb-2"><input class="form-check-input" type="checkbox" value="" id="check-one" checked><label class="form-check-label" for="check-one">{{ $t('phrases.send-me-status-updates') }}</label></div>
                <div class="form-check mb-3"><input class="form-check-input" type="checkbox" value="" id="check-two"><label class="form-check-label" for="check-two">{{ $t('phrases.include-supporting-documents') }}</label></div>
                <fieldset><legend class="fs-6 fw-semibold">{{ $t('phrases.preferred-contact-method') }}</legend><div class="form-check"><input class="form-check-input" type="radio" name="contact-method" id="contact-email" checked><label class="form-check-label" for="contact-email">{{ $t('phrases.email') }}</label></div><div class="form-check"><input class="form-check-input" type="radio" name="contact-method" id="contact-phone"><label class="form-check-label" for="contact-phone">{{ $t('phrases.phone') }}</label></div></fieldset>
                <div class="form-check form-switch mt-3"><input class="form-check-input" type="checkbox" role="switch" id="demo-switch" checked><label class="form-check-label" for="demo-switch">{{ $t('phrases.enable-notifications') }}</label></div>
              </div></div>
              <div class="col-xl-6"><div class="showcase-panel h-100">
                <h3 class="h5">{{ $t('phrases.range-and-input-group') }}</h3>
                <label for="demo-range" class="form-label">{{ $t('phrases.satisfaction') }} <span id="range-value">7</span>/10</label><input type="range" class="form-range" min="0" max="10" value="7" id="demo-range">
                <label for="demo-email" class="form-label mt-3">{{ $t('phrases.email-address') }}</label><div class="input-group"><span class="input-group-text">@</span><input id="demo-email" type="email" class="form-control" :placeholder="$t('phrases.name-example-com')"><button class="btn btn-outline-primary" type="button">{{ $t('phrases.check') }}</button></div>
                <div class="input-group mt-3"><span class="input-group-text">{{ $t('phrases.sar') }}</span><input type="number" class="form-control" :aria-label="$t('phrases.amount')"><span class="input-group-text">.00</span></div>
              </div></div>
              <div class="col-xl-6"><div class="showcase-panel h-100">
                <h3 class="h5">{{ $t('phrases.floating-labels') }}</h3>
                <div class="form-floating mb-3"><input type="email" class="form-control" id="floating-email" :placeholder="$t('phrases.name-example-com')"><label for="floating-email">{{ $t('phrases.email-address') }}</label></div>
                <div class="form-floating"><select class="form-select" id="floating-select" :aria-label="$t('phrases.choose-a-role')"><option selected>{{ $t('phrases.choose-one') }}</option><option value="1">{{ $t('phrases.student') }}</option><option value="2">{{ $t('phrases.staff-member') }}</option></select><label for="floating-select">{{ $t('phrases.your-role') }}</label></div>
              </div></div>
              <div class="col-12"><div class="showcase-panel">
                <h3 class="h5">{{ $t('phrases.form-layout-and-validation') }}</h3>
                <form class="row g-3 needs-validation" id="validation-form" novalidate>
                  <div class="col-md-6"><label for="validation-name" class="form-label">{{ $t('phrases.name') }}</label><input id="validation-name" type="text" class="form-control" required><div class="valid-feedback">{{ $t('phrases.looks-good') }}</div><div class="invalid-feedback">{{ $t('phrases.enter-your-name') }}</div></div>
                  <div class="col-md-6"><label for="validation-email" class="form-label">{{ $t('phrases.university-email') }}</label><input id="validation-email" type="email" class="form-control" required><div class="invalid-feedback">{{ $t('phrases.enter-a-valid-email-address') }}</div></div>
                  <div class="col-12"><div class="form-check"><input class="form-check-input" type="checkbox" id="validation-terms" required><label class="form-check-label" for="validation-terms">{{ $t('phrases.i-confirm-this-information-is-correct') }}</label><div class="invalid-feedback">{{ $t('phrases.confirmation-is-required') }}</div></div></div>
                  <div class="col-12"><button class="btn btn-primary" type="submit">{{ $t('phrases.validate-form') }}</button></div>
                </form>
              </div></div>
            </div>
          </section>
</template>
