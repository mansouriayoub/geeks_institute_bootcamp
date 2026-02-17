const fs = require('fs')

const readFileFs = (filename)=>{
    let readVar = fs.readFile(filename,'utf-8',(err,data)=>{
        if (err) {
            console.log(err);
            return;
        }
        console.log('File content:', data);
    })
}

module.exports = readFileFs;