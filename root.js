var fs = require('fs');
var goBackNum = 0;
var basePath = './';
function findGitRoot() {
  if (goBackNum > 10) { return null;}
  try {
    var doesExist = fs.readdirSync(basePath + '.git');
  } catch(e) {
    goBackNum++;
    basePath = '../' + basePath;
    findGitRoot();
  }
  return basePath;
}
module.exports = findGitRoot;
