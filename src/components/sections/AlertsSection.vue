<script setup>
defineProps({
  isArabic: { type: Boolean, default: true },
});
</script>

<template>
<section class="gallery-section" id="alerts" aria-labelledby="alerts-title">
            <div class="gallery-section-heading"><p class="eyebrow">03 · Feedback</p><h2 id="alerts-title">Alerts</h2></div>
            <div class="showcase-panel d-grid gap-3">
              <div class="alert alert-primary mb-0" role="alert">
                {{ isArabic ? 'تنبيه أساسي مع ' : 'A primary alert with an ' }}
                <RouterLink to="/components/buttons" class="alert-link">{{ isArabic ? 'رابط إجراء' : 'action link' }}</RouterLink>.
              </div>
              <div class="alert alert-success mb-0" role="alert">Your changes were saved successfully.</div>
              <div class="alert alert-warning alert-dismissible fade show mb-0" role="alert">
                <strong>Review needed.</strong> Check the details before continuing.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
              <div class="alert alert-danger mb-0" role="alert">The request could not be completed. Try again.</div>
            </div>
          </section>
</template>
