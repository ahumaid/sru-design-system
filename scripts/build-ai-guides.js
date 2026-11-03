import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const source = resolve(projectRoot, 'src/data/sru-design-system-skill.md');
const destination = resolve(projectRoot, 'public/design-system/sru-design-system-skill.md');

mkdirSync(dirname(destination), { recursive: true });
copyFileSync(source, destination);
