const fs = require('fs');
const path = require('path');

// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//    if (err) {
//       throw err;
//    }
//    console.log(data);
// });
// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'));

// stream.on('data', chunk => {
//    console.log(chunk);
// });

// stream.on('end', () => console.log('Закончили читать'));
// stream.on('open', () => console.log('Начали читать'));
// stream.on('error', (error) => console.log(error));

// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'));
// for (let i = 0; i < 20; i++) {
//    writableStream.write(i + '\n');
// }
// writableStream.end();

// const http = require('http');

// http.createServer((req, res) => {
//    const stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'));
// //    stream.on('data', chunk => res.write(chunk));
// //    stream.on('end', chunk => res.end());
    
//     // Синхронизация readable writable стримов
//     stream.pipe(res,  )
// });
