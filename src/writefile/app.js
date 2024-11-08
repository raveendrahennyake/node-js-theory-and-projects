import { dirname, join } from 'node:path';
import {fileURLToPath} from 'node:url';
import {writeFile} from 'node:fs'

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);


writeFile(join(__dirname,'writefile.txt'),"againdata",(err)=>{
    if(err){
        console.log(err);
    }
})

