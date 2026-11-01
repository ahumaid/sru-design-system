<template>
<section class="gallery-section" id="pagination" aria-labelledby="pagination-title">
            <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4"><p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.19-navigation') }}</p><h2 class="h3 fw-bold mb-0" id="pagination-title">{{ $t('labels.pagination-title') }}</h2></div>
            <div class="showcase-panel"><nav :aria-label="$t('phrases.example-page-navigation')"><ul class="pagination mb-0"><li class="page-item disabled"><span class="page-link">{{ $t('phrases.previous') }}</span></li><li class="page-item active" aria-current="page"><span class="page-link">1</span></li><li class="page-item"><a class="page-link" href="/#pagination">2</a></li><li class="page-item"><a class="page-link" href="/#pagination">3</a></li><li class="page-item"><a class="page-link" href="/#pagination">{{ $t('phrases.next') }}</a></li></ul></nav></div>
          </section>
</template>
