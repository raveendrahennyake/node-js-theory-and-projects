import {fileURLToPath} from 'node:url';
import {writeFile,appendFile} from 'node:fs/promises'
import { dirname, join } from 'node:path';
import { log } from 'node:console';

const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);

 const WriteFile=async(data)=>{
    try{
        const writedata=writeFile(join(__dirname,'../../../new.txt'),data).then((data)=>{console.log(data);})
    .catch((err)=>
    {
        console.log(err);
    })
    console.log(writedata);

    }catch (err){
        log(err)

    }
}

WriteFile("new data is add to function");