const path = require('path');

// console.log(path.join(__dirname, 'first', 'second', 'third'));
// const fullpath = path.resolve(__dirname, 'first', 'second', 'third.js');
// console.log(path.parse(fullpath));

const siteUrl = 'http://localhost:8080/users?id=5123';

const url = new URL(siteUrl);

console.log(url);
