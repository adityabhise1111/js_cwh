import fs from "fs/promises" // why /promise
import fsn from "fs"

import path from "path"
let basepath= "/workspaces/js_cwh/exersize/15" 
let files = await fs.readdir (basepath) // why double //

for (const items of files) {
    //console.log(items)
    let name = items.split(".")[0];
    let ext = items.split(".")[1];
    console.log(name)
    console.log(ext)
    if(!ext || ext == "js")continue;
    if(fsn.existsSync(path.join(basepath ,ext))){
        await fs.rename(path.join(basepath,items),path.join(basepath, ext ,items))
    }
    else {
        fs.mkdir(ext);
        
        await fs.mkdir(path.join(basepath,ext));
        await fs.rename(path.join(basepath,items),path.join(basepath, ext ,items))
    }
}