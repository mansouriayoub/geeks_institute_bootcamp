const greet = require('./greeting.js')
const colorfulMessage = require('./colorful-message.js') 
const readFileFs = require('./files/read-file.js')

greet('imad');

colorfulMessage('text to be green');

// colorfulMessage(greet('imad'));

readFileFs('./files/file-data.txt')