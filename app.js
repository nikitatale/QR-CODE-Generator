import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
  {
    type: "input",
    name: "URL",
    message: "Type in your URL:"
  }
]).then((answers) => {
  const url = answers.URL;
  const qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream("qr_img.png"));
  fs.writeFile("URL.text", `${url}`, (err) => {
    if(err) throw err;
    console.log("The file has been saved!");
  })
  console.log("QR code image saved as qr_img.png");
}).catch((error) => {
  console.log(error);
});
