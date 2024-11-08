import { log } from 'node:console';
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import {fileURLToPath} from 'node:url';


const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

const WriteFile=(data)=>{
    const writedata=writeFileSync(join(__dirname,'../../../new.txt'),data,'utf-8')
    log(writedata);
}

WriteFile("new synce data is writinng");