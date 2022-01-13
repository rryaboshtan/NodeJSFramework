const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

// console.log('Start');
// fs.mkdir(path.resolve(__dirname, 'dir'), err => {
//    if (err) {
//        console.log(err);
//        return;
//    }
//    console.log('Dir created');
// });

// console.log('End');

// fs.rmdir(path.resolve(__dirname, 'dir'), err => {
//    if (err) {
//       throw err;
//    }
// });

// fs.writeFile(path.resolve(__dirname, 'test.txt'), '5querty 19 4 94 4 5 3 2 8', err => {
//    if (err) {
//       throw err;
//    }
//    console.log('File is written');

//    fs.appendFile(path.resolve(__dirname, 'test.txt'), 'Add to end', err => {
//       if (err) {
//          throw err;
//       }
//       console.log('File is written');

//       fs.appendFile(path.resolve(__dirname, 'test.txt'), 'Add to end', err => {
//          if (err) {
//             throw err;
//          }
//          console.log('File is written');
//       });
//    });
// });

const writeFileAsync = async (path, data) => {
   return new Promise((resolve, reject) =>
      fs.writeFile(path, data, err => {
         if (err) {
            return reject(err.message);
         }
         resolve();
      })
   );
};

const appendFileAsync = async (path, data) => {
   return new Promise((resolve, reject) =>
      fs.appendFile(path, data, err => {
         if (err) {
            return reject(err.message);
         }
         resolve();
      })
   );
};

const readFileAsync = async path => {
   return new Promise((resolve, reject) =>
      fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
         if (err) {
            return reject(err.message);
         }
         resolve(data);
      })
   );
};

const removeFileAsync = async path => {
   return new Promise((resolve, reject) =>
      fs.unlink(path, err => {
         if (err) {
            return reject(err.message);
         }
         resolve();
      })
   );
};

// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data')
//    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '123'))
//    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '456'))
//    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '789'))
//    .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//    .then(data => console.log(data))
//    .catch(err => console.log(err));

// removeFileAsync(path.resolve(__dirname, 'test.txt')).then(() => console.log('file was removed'));

// const text = process.env.TEXT;

// writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
//    .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//    .then(data => data.split(' ').length)
//    .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Кол-во слов ${count}`))
//    .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')));
