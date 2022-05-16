const generateNames = require('./generateNames')
const names = generateNames(3);
console.log(names)

const getRandomInteger = require('./getRandomInteger')
let randomNum = getRandomInteger()
const numberOfNames = process.argv[2] || randomNum
console.log(generateNames(numberOfNames));

const fs = require('fs');
fs.writeFileSync(`results/${numberOfNames}-names.txt`, `${generateNames(numberOfNames)}`);




