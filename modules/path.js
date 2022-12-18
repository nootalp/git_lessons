const path = require("path");

// Basename, apenas o nome do diretório atual;
console.log(path.basename(__filename));

// Current directory name;
console.log(path.dirname(__filename));

// File extension;
console.log(path.extname(__filename));

// Create object Path;
console.log(path.parse(__filename));

// Jion file paths;
console.log(path.join(__dirname, "test", "test.html"));

//
