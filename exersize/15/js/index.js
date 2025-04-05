import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basepath = "/workspaces/js_cwh/exersize/15";
const files = await fs.readdir(basepath);
console.log(files);

for (const item of files) {
    const ext = item.split(".")[1];
    const name = item.split(".")[0];

    // Skip files without an extension (e.g., folders like "apk", "jpg", etc.)
    if (!ext) continue;

    console.log(item);
    console.log(name);
    console.log(ext);

    const folderPath = path.join(basepath, ext); // e.g., /workspaces/js_cwh/exersize/15/jpg
    const oldPath = path.join(basepath, item);
    const newPath = path.join(folderPath, item);

    if (fsn.existsSync(folderPath)) {
        console.log(`Folder '${ext}' already exists`);
    } else {
        await fs.mkdir(folderPath);
        console.log(`Folder '${ext}' created`);
    }

    await fs.rename(oldPath, newPath);
    console.log(`Moved '${item}' to '${ext}/'`);
}
