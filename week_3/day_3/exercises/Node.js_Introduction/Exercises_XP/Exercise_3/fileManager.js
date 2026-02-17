import fs from 'fs';

const readFile = (filename) => {
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) console.log(err)
        else console.log(data)
    })
}

const writeFile = (filename, textContent)=>{
    fs.writeFile(filename, textContent, 'utf-8',(err)=>{

        if (err) console.log(err)
            else console.log(`Successfully wrote to ${filename}`);
    })
    }


export { readFile, writeFile }

/*const readFile = (filename) => {
    try {
        const data = fs.readFileSync(filename, "utf-8");
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}*/
/*const writeFile = (filename, textContent)=>{
    try {
        fs.writeFileSync(filename, textContent, 'utf-8')
        console.log(`Successfully wrote to ${filename}`);
        
    } catch (error) {
        console.log(error);   
    }
}
 */