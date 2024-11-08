import { dirname, join } from 'node:path';
import {fileURLToPath} from 'node:url';
import {appendFile} from 'node:fs'

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

appendFile(join(__dirname,'../writefile.txt'),"newdata is addted",(err)=>{
    if(err){
        console.log(err);
    }
})

