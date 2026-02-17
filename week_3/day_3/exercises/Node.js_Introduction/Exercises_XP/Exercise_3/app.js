import { readFile, writeFile } from './fileManager.js';

readFile('./Hello World.txt');
writeFile('./Bye World.txt',"Writing to the file");
readFile('./Bye World.txt');