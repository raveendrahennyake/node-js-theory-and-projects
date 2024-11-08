import { log } from 'node:console';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import {fileURLToPath} from 'node:url';


const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const data=readFileSync(join(__dirname,'../../../new.txt'),'utf-8')
log(data);
