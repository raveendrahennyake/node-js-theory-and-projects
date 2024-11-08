import { dirname, join } from 'node:path';
import {fileURLToPath} from 'node:url';
import {appendFile} from 'node:fs/promises'
import { log } from 'node:console';

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const AppendFile=async(data)=>{
    const appenddata=await appendFile(join(__dirname,'../../../new.txt'),data,'utf-8').then((data)=>{
        log(data)

    }).catch((err)=>{console.log(err);})
}

AppendFile("new append file writting");