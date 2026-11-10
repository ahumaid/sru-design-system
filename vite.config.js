import { readFileSync } from 'node:fs';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { promisify } from 'node:util';
import { compileAsync } from 'sass';
import { defineConfig, normalizePath } from 'vite';
import vue from '@vitejs/plugin-vue';

const skillMarkdownUrl = '/design-system/sru-design-system-skill.md';
const skillMarkdownSource = new URL('./src/data/sru-design-system-skill.md', import.meta.url);
const runFile = promisify(execFile);

function liveTheme() {
    let outputDirectory;
    let buildTask;
    let removeWatcher;

    return {
        name: 'live-sru-theme',
        apply: 'serve',
        async configureServer(server) {
            const root = server.config.root;
            const stylesDirectory = normalizePath(path.join(root, 'src/styles'));
            outputDirectory = await mkdtemp(path.join(tmpdir(), 'sru-theme-dev-'));
            const themePath = path.join(outputDirectory, 'sru-theme.css');
            const tokensPath = path.join(outputDirectory, 'sru-tokens.css');
            let stylesheets = new Map();
            let pending = false;

            const rebuild = () => {
                pending = true;
                if (buildTask) return buildTask;

                buildTask = (async () => {
                    do {
                        pending = false;
                        try {
                            const result = await compileAsync(path.join(stylesDirectory, 'sru-theme.scss'), {
                                loadPaths: [path.join(root, 'node_modules')],
                                style: 'compressed',
                                quietDeps: true,
                                silenceDeprecations: ['import'],
                            });
                            await writeFile(themePath, result.css);
                            await runFile(process.execPath, ['scripts/build-direction-stylesheet.js', themePath], { cwd: root });
                            await runFile(process.execPath, ['scripts/build-tokens.js', tokensPath], { cwd: root });
                            const [theme, tokens] = await Promise.all([readFile(themePath), readFile(tokensPath)]);
                            if (!pending) {
                                stylesheets = new Map([
                                    ['/design-system/sru-theme.css', theme],
                                    ['/design-system/sru-tokens.css', tokens],
                                ]);
                                server.ws.send({ type: 'full-reload', path: '*' });
                                server.config.logger.info('Theme updated / تم تحديث المظهر');
                            }
                        } catch (error) {
                            server.config.logger.error(`Theme build failed / تعذر بناء المظهر:\n${error.message}`);
                            server.ws.send({ type: 'error', err: {
                                message: `Theme build failed / تعذر بناء المظهر:\n${error.message}`,
                                stack: error.stack ?? '',
                                plugin: 'live-sru-theme',
                            } });
                        }
                    } while (pending);
                })().finally(() => { buildTask = undefined; });
                return buildTask;
            };

            const onChange = (file) => {
                const normalized = normalizePath(file);
                if (normalized.startsWith(`${stylesDirectory}/`) && normalized.endsWith('.scss')) rebuild();
            };
            server.watcher.add(stylesDirectory);
            server.watcher.on('change', onChange);
            removeWatcher = () => server.watcher.off('change', onChange);

            await rebuild();
            server.middlewares.use((request, response, next) => {
                const url = request.url?.split('?')[0];
                if (url !== '/design-system/sru-theme.css' && url !== '/design-system/sru-tokens.css') return next();

                const css = stylesheets.get(url);
                response.setHeader('Cache-Control', 'no-store');
                response.setHeader('Content-Type', 'text/css; charset=utf-8');
                response.statusCode = css ? 200 : 503;
                response.end(css ?? '/* Theme build failed / تعذر بناء المظهر */');
            });
        },
        async closeBundle() {
            removeWatcher?.();
            await buildTask;
            if (outputDirectory) await rm(outputDirectory, { recursive: true, force: true });
        },
    };
}

export default defineConfig({
    plugins: [
        vue(),
        liveTheme(),
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
