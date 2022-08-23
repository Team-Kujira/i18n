const fs = require("fs");
const files = fs.readdirSync("./translations");
let keys = [];
console.log(files);

files.forEach((f) => {
  const t = JSON.parse(fs.readFileSync(`./translations/${f}`));
  keys = [...keys, ...Object.keys(t)];
});

console.log(keys);

const template = keys.reduce((a, k) => ({ ...a, [k]: "" }), {});

fs.writeFileSync(
  "./translations/template.json",
  JSON.stringify(template, null, 2),
  { encoding: "utf-8" }
);
