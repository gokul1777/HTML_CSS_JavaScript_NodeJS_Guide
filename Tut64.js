const fs = require("fs");
let text = fs.readFileSync("Tut64.txt", "utf-8");
text = text.replace("Writing", "Learning");

console.log("The content of the file is ");
console.log(text);

console.log("Creating a new file....");
fs.writeFileSync("Documentation.txt", text);