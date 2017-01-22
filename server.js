var express = require('express');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var app = express();
var port = process.env.PORT || 8080;

app.set('view engine', 'pug'); 
app.set('views',  __dirname + '/views'); 

app.get('/', function(req,res){
    res.render('index');
});

app.post('/', multer().single('upload'), function(req,res){
    var size = req.file.size + ' bytes';
    res.json({size:size});
});

app.listen(port, function(){
    console.log('File Metadata App listening on port: ' + port);
});