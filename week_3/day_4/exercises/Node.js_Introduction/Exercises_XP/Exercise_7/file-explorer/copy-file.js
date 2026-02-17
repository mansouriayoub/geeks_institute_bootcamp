/**
In copy-file.js, use the fs module to read the content from a file named source.txt 
and then write the same content to a new file named destination.txt.
 * 
*/

import fs from 'fs';

export const copyContent = (filename, filenameToCopyAt)=>{

    fs.readFile(filename, 'utf-8', (err,data)=>{
        if (err) {
            console.log(err);
            return;
        }
        if (data) {
            
            // fs.copyFile((filename, filenameToCopyAt), (err)=>{

            //     if(err)console.log(err)
            //         else console.log(`Content of ${filename} copied to ${filenameToCopyAt} successfully!'`)
            // });

            fs.writeFile(filenameToCopyAt, data, err=>{
                if (err) console.log(err);
                    else console.log(`Content of ${filename} copied to ${filenameToCopyAt} successfully!'`)
            })
        }
    })
}

copyContent('source.txt', 'destination.txt');
