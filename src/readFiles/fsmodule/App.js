import { dirname, join } from 'node:path';
import {fileURLToPath} from 'node:url';
import {readFile,writeFile} from 'node:fs';
import { log } from 'node:console';

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);
console.log(__dirname);

readFile(join(__dirname,'../../new.txt'),'utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else {
        console.log(data);
    }
})

