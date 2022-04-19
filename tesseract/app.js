/*
Docs: https://github.com/naptha/tesseract.js#documentation
How to install:
CDN: <script src='https://unpkg.com/tesseract.js@v2.1.0/dist/tesseract.min.js'></script>

NODE:
npm install tesseract.js
yarn add tesseract.js
*/

const Tesseract = require("tesseract.js")

// // Basic
// // Docs say this way isnt reccomended for real applications, "useful to save time"
// Tesseract.recognize(
//   "./images/react-docs.png",
//   "eng",
//   {logger: m => console.log(m)})
//   .then(({ data: {text} }) =>{
//     console.log(text)
//   })



const { createWorker } = require("tesseract.js")
const worker = createWorker()

// const convertImageToText = async () => {
//   await worker.load();
//   await worker.loadLanguage("eng");
//   await worker.initialize("eng");
//   const {data} = await worker.recognize("./images/react-docs.png");
//   console.log(data.text);
//   await worker.terminate();
// }
// convertImageToText()




// //List of Languages: https://github.com/tesseract-ocr/tessdoc/blob/main/Data-Files.md
// //Arabic
// const convertImageToText = async () => {
//   await worker.load();
//   await worker.loadLanguage("ara");
//   await worker.initialize("ara");
//   const {data} = await worker.recognize("./images/react-docs2.png");
//   console.log(data.text);
//   await worker.terminate();
// }
// convertImageToText()




// //Two languages at the same time
// const convertImageToText = async () => {
//   await worker.load();
//   await worker.loadLanguage("spa+deu");
//   await worker.initialize("spa+deu");
//   const {data} = await worker.recognize("./images/spanish-german.png");
//   console.log(data.text);
//   await worker.terminate();
// }
// convertImageToText()




//Whitelisting specifc charaters
const numbers = '0123456789'
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const convertImageToText = async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  await worker.setParameters({
    tessedit_char_whitelist: alphabet,
    //tessedit_char_whitelist: numbers
  });
  const {data} = await worker.recognize("./images/numbers.png");
  console.log(data.text);
  await worker.terminate();
}
convertImageToText()
/* A space can also be whitelisted

- alphabet output: 
Prime Numbers Prime numbers are the numbers that have two factors only ie  and the number itself In
other words the number which is divided by T and the number itself is called prime numbers 
For example etc

- numbers output:
1 123 5711
*/


/* Also functions for:
getting a specifc "rectangle" of an image
making multiple workers work on one image by splitting them into diffrent rectangles


