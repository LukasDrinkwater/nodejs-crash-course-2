const fs = require("fs");
const path = require("path");

// Create folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("folder created");
});

// Create and write to files
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "hello world!",
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file writtent to");

    // File append
    // fs.appendFile(
    //   path.join(__dirname, "/test", "hello.txt"),
    //   "i love node js",
    //   (err) => {
    //     if (err) {
    //       console.log(err);
    //     }
    //     console.log("file writtent to");
    //   }
    // );
  }
);

// Read file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file renamed");
  }
);
