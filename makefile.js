var mkdirp = require('mkdirp');

mkdirp('Users/silverRectangle/Documents/Code/test22/', function (err) {
    if (err) console.error(err)
    else console.log('pow!')
});
