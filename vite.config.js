import { readFileSync } from 'node:fs';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const skillMarkdownUrl = '/design-system/sru-design-system-skill.md';
const skillMarkdownSource = new URL('./src/data/sru-design-system-skill.md', import.meta.url);

export default defineConfig({
    plugins: [
        vue(),
        {
            name: 'serve-sru-skill-as-utf8-markdown',
            configureServer(server) {
                server.middlewares.use((request, response, next) => {
                    if (request.url?.split('?')[0] !== skillMarkdownUrl) return next();

                    response.setHeader('Content-Type', 'text/markdown; charset=utf-8');
                    response.end(readFileSync(skillMarkdownSource));
                });
            },
        },
    ],
    base: '/',
    publicDir: 'public',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
    server: {
        host: '0.0.0.0',
    },
});
