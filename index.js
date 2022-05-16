const generateNames = require('./generateNames')
const names = generateNames(3);
//console.log(names)

const getRandomInteger = require('./getRandomInteger')
const numberOfNames = process.argv[2] || getRandomInteger()
//console.log(generateNames(numberOfNames));

const fs = require('fs');
fs.writeFileSync(`results/${numberOfNames}-names.txt`, `${generateNames(numberOfNames)}`);




