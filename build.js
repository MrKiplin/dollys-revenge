const { join } = require("path");
const { zip } = require("zip-a-folder");
const { name, version } = require('./package.json');

const inputFolder = join(__dirname, "/src");
const outputFolder = join(__dirname, `/dist/${name}-v${version}.zip`);

const build = async () => {
  await zip(inputFolder, outputFolder);
}

build().catch(err => {
  console.error(err.message);
});
