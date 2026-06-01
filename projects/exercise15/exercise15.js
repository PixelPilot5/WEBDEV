const fs = require("fs");
const path = require("node:path");
function foldercontent() {
    const folderPath = "C:\\Users\\priya\\Desktop\\web dev\\backend\\exercise15";
    return fs.readdirSync(folderPath).map(fileName => {
        const finalpath = path.join(folderPath, fileName);
        return finalpath;
    });
}

const filepaths = foldercontent();
for (const file of filepaths) {
    const ext = path.extname(file);
    const folderName = path.join('C:\\Users\\priya\\Desktop\\web dev\\backend\\exercise15', ext);
    try {
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName);
        }
        fs.renameSync(file, path.join(folderName, path.basename(file)));
    } catch (err) {
        console.error(err);
    }
}
