var curl = require('curlrequest');

// curl.request({ url: 'http://code.jquery.com/jquery-2.2.1.min.js', pretend: true }, function (err, stdout, meta) {
//     console.log(meta)
//     console.log('%s %s', meta.cmd, meta.args.join(' '));
// });

var options = { url: 'http://code.jquery.com/jquery-2.2.1.min.js', include: true };

curl.request(options, function (err, parts) {
    parts = parts.split('\r\n');
    var data = parts.pop()
      , head = parts.pop();
        console.log(data,'data')
});
