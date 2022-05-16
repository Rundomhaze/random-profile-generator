const randomProfile = require('random-profile-generator');

function generateNames(n) {
  let result = []
  for (let i = 0; i < n; i++) {
    result.push(randomProfile.name())
  }
  return result.join('\n');
}

module.exports = generateNames
