const fs = require("fs");
const marked = require("marked");
const path = require("path");

const startPath = process.cwd();

const inputFileArg = process.argv[2] || "README.md";
const outputFileArg = process.argv[3] || "public/index.html";

const inputFile = path.join(startPath, inputFileArg);
const outputFile = path.join(startPath, outputFileArg);

const outputDir = path.dirname(outputFile);

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const cssPath = path.join(startPath, "node_modules", "github-markdown-css", "github-markdown.css");

const mardown = fs.readFileSync(inputFile, "utf8");
const css = fs.readFileSync(cssPath, "utf8");

const htmlContent = marked.parse(mardown);
const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
${css}
.markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 45px;
}
@media (max-width: 767px) {
    .markdown-body {
        padding: 15px;
    }
}
</style>
<title>README</title>
</head>
<body class="markdown-body">
${htmlContent}
</body>
</html>`;

fs.writeFileSync(outputFile, htmlTemplate);

console.log(`Created page: ${inputFile} -> ${outputFile}`);
