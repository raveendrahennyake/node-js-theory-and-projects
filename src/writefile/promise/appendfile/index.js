import {fileURLToPath} from 'node:url';
import {appendFile} from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { log } from 'node:console';

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

appendFile(join(__dirname,'../../../new.txt'),"newAppend data ",'utf-8').then((data)=>{
    log(data)

}).catch((err)=>{console.log(err);})