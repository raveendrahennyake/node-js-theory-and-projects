import { log } from 'node:console';
import { readFile } from 'node:fs';
import { dirname, join } from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const FileRead=(path)=>{
   const data =readFile(join(__dirname,`../text/${path}`),'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }else {
            log(data)
        }
    })
    

}

FileRead('read.txt');