// Running from the command line: http://stackoverflow.com/questions/30782693/run-function-in-script-from-command-line-node-js

var child_process = require('child_process');
var curl = require('curlrequest');
var fs = require('fs');
var fileName = process.argv[2]
// Input editor command line code below
var editor = 'subl';

console.log('Attempting to create '+fileName+' folder');

fs.mkdir(fileName,function(err){
   if (err) {
      console.log('error at '+fileName+' folder')
      return console.error(err);
   }
   console.log(fileName+' directory created successfully!');
});

fs.mkdir(fileName+'/views',function(err){
   if (err) {
      console.log('error at '+fileName+'/views folder')
      return console.error(err);
   }
   console.log(fileName+'/views directory created successfully!');
});

fs.mkdir(fileName+'/public',function(err){
   if (err) {
      console.log('error at '+fileName+'/public folder')
      return console.error(err);
   }
   console.log(fileName+'/public directory created successfully!');
    });

fs.mkdir(fileName+'/db',function(err){
   if (err) {
      console.log('error at '+fileName+'/db folder')
      return console.error(err);
   }
   console.log(fileName+'/db directory created successfully!');
    });


fs.mkdir(fileName+'/public/css',function(err){
   if (err) {
      console.log('error at '+fileName+'/public/css folder')
      return console.error(err);
   }
   console.log(fileName+'/public/css directory created successfully!');
});

fs.mkdir(fileName+'/public/img',function(err){
   if (err) {
      console.log('error at '+fileName+'/public/img folder')
      return console.error(err);
   }
   console.log(fileName+'/public/img directory created successfully!');
});

fs.mkdir(fileName+'/public/js',function(err){
   if (err) {
            console.log('error at '+fileName+'/public/css folder')
      return console.error(err);
   }
   console.log(fileName+'/public/js directory created successfully!');
});


fs.writeFile(fileName+'/public/css/style.css', 'body {\n\n}',  function(err) {
   if (err) {
      console.log('Error: /'+fileName+'/public/css/style.css')
      return console.error(err);
   }
    console.log(fileName+'/public/css/style.css created')
 })


fs.writeFile(fileName+'/views/input.html', '<!DOCTYPE html>\n<html>\n<head>\n  <link href="/css/style.css" rel="stylesheet" type="text/css">\n</head>\n<body>\n  <div class="container">\n  <div></div>\n <div></div>\n <div></div>\n  </div>\n</body>\n</html>\n<script src="/js/jquery.js" type="text/javascript"></script>\n<script src="/js/script.js" type="text/javascript"></script>',  function(err) {
   if (err) {
      console.log('Error: /'+fileName+'/views/input.html')
      return console.error(err);
   }
     console.log(fileName+'/views/input.html created')

   })

fs.writeFile(fileName+'/public/js/script.js', '$(function() {\n  console.log( "script loaded!" );\n});',  function(err) {
   if (err) {
      console.log('Error: /'+fileName+'/public/js/script.js')
      return console.error(err);
   }
      console.log(fileName+'/public/js/script.js created')
})

fs.writeFile(fileName+'/db/schema.sql', 'DROP TABLE IF EXISTS',  function(err) {
   if (err) {
      console.log('Error: /'+fileName+'/db/schema.sql')
      return console.error(err);
   }
      console.log(fileName+'/db/schema.sql created')
})

fs.writeFile(fileName+'/db/seeds.sql', '\n',  function(err) {
   if (err) {
      console.log('Error: /'+fileName+'/db/seeds.sql')
      return console.error(err);
   }
      console.log(fileName+'/db/seeds.sql created')
 })

fs.writeFile(fileName+'/public/js/script.js', '$(function() {\n  console.log( "script loaded!"" );\n});',  function(err) {
   if (err) {
      console.log('Error: /'+fileName+'/public/js/script.js')
      return console.error(err);
   }
      console.log(fileName+'/public/js/script.js created')
 })

fs.writeFile(fileName+'/app.js', '/////////------SET UP VARIABLES------/////////\n\
  const exp = require("express");\nconst app = exp();\nconst mustacheExpress = require("mustache-express");\nconst bodyParser = require("body-parser");\nconst session = require("express-session");\nconst bcrypt = require("bcryptjs");\nconst methodOverride = require("method-override");',  function(err) {
   if (err) {
      console.log('Error: /'+fileName+'/public/js/script.js')
      return console.error(err);
   }
      console.log(fileName+'/app.js created')
 })


fs.writeFile(fileName+'/README.md', '# README\n\n This README would normally document whatever\ steps are necessary to get the application up and running.\n\nThings you may want to cover:\n\n**Javascript version**\n\n**system dependencies**\n\n**Configuration**\n\n**Database creation**\n\n**Database\ initialization**\n\n**How to run the test suite**\n\n**Services (job queues, cache servers, search engines, etc.)**\n\n**Deployment instructions**',  function(err) {
   if (err) {
      console.log('Error: /'+fileName+'/public/js/script.js')
      return console.error(err);
   }
      console.log(fileName+'/README.md created')
 })

var options = { url: 'http://code.jquery.com/jquery-2.2.1.min.js', include: true };
curl.request(options, function (err, parts) {
    parts = parts.split('\r\n');
    var data = parts.pop()
      , head = parts.pop();
        fs.writeFile('./'+fileName+'/public/js/jquery.js', data.toString(),  function(err) {
   if (err) {
      console.log('Error: /'+fileName+'/public/js/jquery.js')
      return console.error(err);
   }}
   )
      console.log(fileName+'/public/js/jquery.js created')
});


var child = child_process.spawn(editor, [fileName], {
    stdio: 'inherit'
});

child.on('exit', function (e, code) {
    console.log('finished');
});


