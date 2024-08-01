#!/usr/bin/node

/**
* script reads and prints the content of a file
* first argument is the file path
* Content of file must be utf-8
* if error print error object
*/

const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
