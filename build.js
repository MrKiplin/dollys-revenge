const { join } = require("path");
const { zip } = require("zip-a-folder");
const { version } = require('./package.json');

const inputFolder = join(__dirname, "/src");
const outputFolder = join(__dirname, `/dist/dollys-revenge-v${version}.zip`);

const build = async () => {
  await zip(inputFolder, outputFolder);
}

build().catch(err => {
  console.error(err.message);
});
