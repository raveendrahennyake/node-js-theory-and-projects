import { dirname, join } from 'node:path';
import {fileURLToPath} from 'node:url';
import {writeFile,appendFile} from 'node:fs/promises'
import { log } from 'node:console';
const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);


writeFile(join(__dirname,'../../../new.txt'),"new promise aoi").then((data)=>{
    log("data is writting")

}).catch((err)=>{console.log(err);})



appendFile(join(__dirname,'../../../new.txt'),"newappend data").then((data)=>{console.log("append data is writtinf");}).catch
((err)=>{console.log(err);})