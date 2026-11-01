<script setup>
import { computed } from 'vue';

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});

const tokens = computed(() => {
  const result = [];
  const pattern = /<!--[\s\S]*?-->|<!DOCTYPE\b[^>]*>|<\/?[A-Za-z][\w:-]*|\/?>|[A-Za-z_:][\w:.-]*(?=\s*=)|=|"[^"]*"|'[^']*'/gi;
  let cursor = 0;
  let lineStart = true;

  const addText = (text, className) => {
    text.split(/(\n)/).forEach((part) => {
      if (part === '\n') {
        result.push({ newline: true });
        lineStart = true;
        return;
      }

      if (!part) return;

      let content = part;
      if (lineStart) {
        const indentation = content.match(/^ +/)?.[0] ?? '';
        if (indentation) {
          result.push({ text: indentation.replaceAll(' ', '\u00a0'), className });
          content = content.slice(indentation.length);
        }
        if (content) lineStart = false;
      }

      if (content) {
        result.push({ text: content, className });
        lineStart = false;
      }
    });
  };

  let match;

  while ((match = pattern.exec(props.code)) !== null) {
    if (match.index > cursor) {
      addText(props.code.slice(cursor, match.index));
    }

    const text = match[0];
    let className = 'text-light';

    if (/^<!--|^<!DOCTYPE/i.test(text)) {
      className = 'text-secondary-emphasis';
    } else if (/^<\/?[A-Za-z]/.test(text)) {
      className = 'text-info-emphasis fw-semibold';
    } else if (/^["']/.test(text)) {
      className = 'text-success-emphasis';
    } else if (text === '=' || /^[/>]/.test(text)) {
      className = 'text-secondary-emphasis';
    } else {
      className = 'text-danger-emphasis';
    }

    addText(text, className);
    cursor = pattern.lastIndex;
  }

  if (cursor < props.code.length) {
    addText(props.code.slice(cursor));
  }

  return result;
});
</script>

<template>
  <details class="mt-3 w-100">
    <summary class="fw-semibold text-primary mb-3">{{ label }}</summary>
    <pre class="bg-black border border-secondary rounded-3 p-3 p-md-4 mb-0 overflow-auto text-light text-wrap text-break" dir="ltr" data-bs-theme="dark" tabindex="0"><code class="font-monospace small"><template v-for="(token, index) in tokens" :key="index"><br v-if="token.newline"><span v-else :class="token.className">{{ token.text }}</span></template></code></pre>
  </details>
</template>
