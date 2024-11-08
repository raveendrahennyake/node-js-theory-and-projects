import {fileURLToPath} from 'node:url';
import {readFile} from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { log } from 'node:console';

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const ReadFile=async()=>{
    const readdata=await readFile (join(__dirname,'../../../new.txt'),'utf-8').then((data)=>{
        log(data)

    }).catch
((err)=>{console.log(err);})
}

ReadFile();
