const fs = require("fs");
const path = require("path");

const requiredFiles = ["index.html", "styles.css", "script.js"];

const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(__dirname, "..", file)));
if (missing.length) {
  console.error(`Missing required files: ${missing.join(", ")}`);
  process.exit(1);
}

const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
if (!html.includes("Antriom Advisory")) {
  console.error("index.html must include brand name.");
  process.exit(1);
}

console.log("Validation passed: essential files and brand name present.");
