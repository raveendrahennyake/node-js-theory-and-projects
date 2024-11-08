import { dirname, join } from 'node:path';
import {fileURLToPath} from 'node:url';
import {readFile} from 'node:fs/promises'
import { log } from 'node:console';

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);


readFile(join(__dirname,'../../../new.txt'),'utf-8').then((data)=>{
    log(data)
}).catch((err)=>{
    log(err)

})