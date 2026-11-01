<template>
<section class="gallery-section" id="pagination" aria-labelledby="pagination-title">
            <div class="gallery-section-heading"><p class="eyebrow">{{ $t('phrases.19-navigation') }}</p><h2 id="pagination-title">{{ $t('labels.pagination-title') }}</h2></div>
            <div class="showcase-panel"><nav :aria-label="$t('phrases.example-page-navigation')"><ul class="pagination mb-0"><li class="page-item disabled"><span class="page-link">{{ $t('phrases.previous') }}</span></li><li class="page-item active" aria-current="page"><span class="page-link">1</span></li><li class="page-item"><RouterLink class="page-link" to="/components/pagination">2</RouterLink></li><li class="page-item"><RouterLink class="page-link" to="/components/pagination">3</RouterLink></li><li class="page-item"><RouterLink class="page-link" to="/components/pagination">{{ $t('phrases.next') }}</RouterLink></li></ul></nav></div>
          </section>
</template>
