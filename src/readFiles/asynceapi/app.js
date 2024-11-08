import { dirname, join } from 'node:path';
import {fileURLToPath} from 'node:url';
import { readFileSync } from 'node:fs';

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

readFileSync(join(__dirname,'../../../new.txt'),'utf-8');
