const { join } = require("path");
const { zip } = require("zip-a-folder");
const { version } = require('./package.json');

const inputFolder = join(__dirname, "/src");
const outputFolder = join(__dirname, `/dist/dollys-revenge-v${version}.zip`);

const main = async () => {
  await zip(inputFolder, outputFolder)
}

main().catch(err => {
  console.error(err.message)
});
