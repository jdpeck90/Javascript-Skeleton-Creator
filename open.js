var child_process = require('child_process');


var editor = process.env.EDITOR || 'subl';

var child = child_process.spawn(editor, ['/tmp/somefile.txt'], {
    stdio: 'inherit'
});

child.on('exit', function (e, code) {
    console.log("finished");
});
