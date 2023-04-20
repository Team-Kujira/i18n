const fs = require("fs");
const files = fs.readdirSync("./translations");

files.forEach((f) => {
  try {
    const t = JSON.parse(fs.readFileSync(`./translations/${f}`));
  } catch (error) {
    throw new Error(`Invalid JSON: ${f}`);
  }
});
