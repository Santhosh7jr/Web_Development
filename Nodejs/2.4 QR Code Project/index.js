/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qrImage from "qr-image";
import fs from "fs";

let result = "";
let id = 0;

inquirer
  .prompt([
    {message : "enter the URL: ", name : "URL"} 
  ])
  .then((answers) => {
    result = answers.URL;
    var qr_svg = qrImage.image(result);
    qr_svg.pipe(fs.createWriteStream(`test${++id}.png`));

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });