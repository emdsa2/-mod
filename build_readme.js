const fs = require("fs-extra");
const marked = require("marked");
const path = require("path");

const readmePath = path.join(__dirname, "README.md");
const outputPath = path.join(__dirname, "public", "index.html");
const cssPath = path.join(__dirname, "node_modules", "github-markdown-css", "github-markdown.css");

fs.readFile(readmePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading README.md:", err);
        process.exit(1);
    }

    fs.readFile(cssPath, "utf8", (cssErr, cssData) => {
        if (cssErr) {
            console.error("Error reading CSS:", cssErr);
            process.exit(1);
        }

        const htmlContent = marked.parse(data);
        const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        ${cssData}
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

        fs.outputFile(outputPath, htmlTemplate, (err) => {
            if (err) {
                console.error("Error writing index.html:", err);
                process.exit(1);
            }

            console.log("index.html has been generated successfully with GitHub style.");
        });
    });
});
