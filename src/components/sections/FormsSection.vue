<template>
<section class="gallery-section" id="forms" aria-labelledby="forms-title">
            <div class="gallery-section-heading"><p class="eyebrow">13 · Data entry</p><h2 id="forms-title">Forms</h2><p class="text-secondary">Form controls share focus, border, and validation styles. Labels remain visible and connected to their fields.</p></div>
            <div class="row g-4">
              <div class="col-xl-6"><div class="showcase-panel h-100">
                <h3 class="h5">Controls and select</h3>
                <label for="demo-name" class="form-label">Full name</label><input id="demo-name" class="form-control mb-3" type="text" placeholder="Enter a name">
                <label for="demo-description" class="form-label">Description</label><textarea id="demo-description" class="form-control mb-3" rows="3" placeholder="Add a short description"></textarea>
                <label for="demo-select" class="form-label">Department</label><select id="demo-select" class="form-select"><option selected>Select a department</option><option>Admissions</option><option>Digital transformation</option><option>Student services</option></select>
                <div class="form-text">Supporting text explains what the field is used for.</div>
              </div></div>
              <div class="col-xl-6"><div class="showcase-panel h-100">
                <h3 class="h5">Checks and radios</h3>
                <div class="form-check mb-2"><input class="form-check-input" type="checkbox" value="" id="check-one" checked><label class="form-check-label" for="check-one">Send me status updates</label></div>
                <div class="form-check mb-3"><input class="form-check-input" type="checkbox" value="" id="check-two"><label class="form-check-label" for="check-two">Include supporting documents</label></div>
                <fieldset><legend class="fs-6 fw-semibold">Preferred contact method</legend><div class="form-check"><input class="form-check-input" type="radio" name="contact-method" id="contact-email" checked><label class="form-check-label" for="contact-email">Email</label></div><div class="form-check"><input class="form-check-input" type="radio" name="contact-method" id="contact-phone"><label class="form-check-label" for="contact-phone">Phone</label></div></fieldset>
                <div class="form-check form-switch mt-3"><input class="form-check-input" type="checkbox" role="switch" id="demo-switch" checked><label class="form-check-label" for="demo-switch">Enable notifications</label></div>
              </div></div>
              <div class="col-xl-6"><div class="showcase-panel h-100">
                <h3 class="h5">Range and input group</h3>
                <label for="demo-range" class="form-label">Satisfaction <span id="range-value">7</span>/10</label><input type="range" class="form-range" min="0" max="10" value="7" id="demo-range">
                <label for="demo-email" class="form-label mt-3">Email address</label><div class="input-group"><span class="input-group-text">@</span><input id="demo-email" type="email" class="form-control" placeholder="name@example.com"><button class="btn btn-outline-primary" type="button">Check</button></div>
                <div class="input-group mt-3"><span class="input-group-text">SAR</span><input type="number" class="form-control" aria-label="Amount"><span class="input-group-text">.00</span></div>
              </div></div>
              <div class="col-xl-6"><div class="showcase-panel h-100">
                <h3 class="h5">Floating labels</h3>
                <div class="form-floating mb-3"><input type="email" class="form-control" id="floating-email" placeholder="name@example.com"><label for="floating-email">Email address</label></div>
                <div class="form-floating"><select class="form-select" id="floating-select" aria-label="Choose a role"><option selected>Choose one</option><option value="1">Student</option><option value="2">Staff member</option></select><label for="floating-select">Your role</label></div>
              </div></div>
              <div class="col-12"><div class="showcase-panel">
                <h3 class="h5">Form layout and validation</h3>
                <form class="row g-3 needs-validation" id="validation-form" novalidate>
                  <div class="col-md-6"><label for="validation-name" class="form-label">Name</label><input id="validation-name" type="text" class="form-control" required><div class="valid-feedback">Looks good.</div><div class="invalid-feedback">Enter your name.</div></div>
                  <div class="col-md-6"><label for="validation-email" class="form-label">University email</label><input id="validation-email" type="email" class="form-control" required><div class="invalid-feedback">Enter a valid email address.</div></div>
                  <div class="col-12"><div class="form-check"><input class="form-check-input" type="checkbox" id="validation-terms" required><label class="form-check-label" for="validation-terms">I confirm this information is correct.</label><div class="invalid-feedback">Confirmation is required.</div></div></div>
                  <div class="col-12"><button class="btn btn-primary" type="submit">Validate form</button></div>
                </form>
              </div></div>
            </div>
          </section>
</template>
