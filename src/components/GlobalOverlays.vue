<template>
  <div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="demo-toast" class="toast" role="status" aria-live="polite" aria-atomic="true">
      <div class="toast-header">
        <span class="toast-mark bg-primary me-2" aria-hidden="true"></span>
        <strong class="me-auto">{{ $t('phrases.sulaiman-alrajhi-university-portal') }}</strong>
        <small>{{ $t('phrases.just-now') }}</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" :aria-label="$t('phrases.close')"></button>
      </div>
      <div class="toast-body">{{ $t('phrases.your-preferences-have-been-saved') }}</div>
    </div>
  </div>
</template>
