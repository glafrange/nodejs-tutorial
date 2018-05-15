var fs = require('fs');

fs.readFile('read-me.txt', 'utf8', function(err, data){
  fs.writeFile('write-me.txt', data, () => null);
});
