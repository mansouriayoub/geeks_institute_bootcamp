import chalk from "chalk";

console.log(chalk.blue('Hello World'))
// Prints "Hello World" in blue

console.log(chalk.red.bold('ERROR!'))
// Prints "ERROR!" in bold red

console.log(chalk.green.underline.bold('Success!'))
// Prints "Success!" in green, underlined, and bold

console.log(chalk.bgYellow.black('Warning'))
// Prints "Warning" with yellow background and black text

console.log(chalk.blue('Info: ') + chalk.green('Operation completed'))
// Blue "Info:" followed by green "Operation completed"

const name = 'Elif'
console.log(chalk.cyan(`Hello, ${name}!`))
// Prints "Hello, Alice!" in cyan


console.log(chalk.blue('━'.repeat(50)))
console.log(chalk.green.bold('✓ Welcome to Colorful Terminal!'))
console.log(chalk.blue('━'.repeat(50)))

console.log(chalk.yellow('⚠ This is a warning message'))
console.log(chalk.red.bold('✗ This is an error message'))
console.log(chalk.green('✓ This is a success message'))
console.log(chalk.cyan('ℹ This is an info message'))

console.log(chalk.bgMagenta.white(' Highlighted Text '))
console.log(chalk.underline.blue('https://example.com'))

console.log(chalk.blue('━'.repeat(50)))