const userPrompt = prompt('Write several words (put commas between words)');

const wordsInArr = userPrompt.split(', ');

const words = wordsInArr.map(word => word.trim());


let maxLength = 0;
for (let word of words) {
    if (word.length > maxLength) {
        maxLength = word.length;
    }
}

const numberOfStars = maxLength + 4;
const stars = '*'.repeat(numberOfStars);
console.log(stars);

for (let word of words) {
    const padding = ' '.repeat(maxLength - word.length);
    const line = `* ${word}${padding} *`;
    console.log(line);
}

console.log(stars);
