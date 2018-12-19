var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//serving files from public folder
app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
    console.log('Todo List API is now listening on port 3000...');
});