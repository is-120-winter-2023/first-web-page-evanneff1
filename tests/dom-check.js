const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");

const fileText = fs.readFileSync("./index.html", "utf8");
const dom = new JSDOM(fileText);

module.exports = { dom: dom, fileText: fileText };
