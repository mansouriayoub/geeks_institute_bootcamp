/*In read-directory.js, use the fs module to read the list of files in a specified directory and display their names in the terminal.

Open a terminal in the file-explorer directory.*/

/**
 * call readdir directly with a path
    → callback receives err and files
        → if err, handle it and stop
        → otherwise loop through files and print each one
 */

import fs from 'fs';

fs.readdir('.', (err, files)=>{
    if(err){
        console.log(err);return;
    }
    files.forEach(file=>console.log(file))
})
