var fs = require('fs');

fs.unlink('./stuff/write-me.txt', () => fs.rmdir('stuff', (err) => console.log(err)) )