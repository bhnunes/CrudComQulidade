const fs = require("fs");
const DB_FILE_PATH = ".\\core\\db";


console.log("[CRUD 3]")

function create(content) {
    fs.writeFileSync(DB_FILE_PATH,content);
    return content;
}

create("Teste path 3")