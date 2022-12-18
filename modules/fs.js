// File manipulation
const fs = require("fs");
const path = require("path");

// Create a directory;
fs.mkdir(path.join(__dirname, "/test"), {}, (error) => {
  if (error) {
    return console.log("Error ", error);
  }
  console.log("Directory create sucessful.");
});

// Create a file
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello, node!",
  (error) => {
    if (error) {
      return console.log("Error ", error);
    }
    console.log("File creation sucessful.");
  }
);
