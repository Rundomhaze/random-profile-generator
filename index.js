const generateNames = require('./generateNames');
const getRandomInt = require('./getRandomInteger');
const fs = require('fs');

const numberOfNames = process.argv[2] || getRandomInt();

fs.writeFileSync(`results/${numberOfNames}-names.txt`, `${generateNames(numberOfNames)}`);
