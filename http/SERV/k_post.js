var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser'); 
 
// Create application/x-www-form-urlencoded parser 

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/process_post', urlencodedParser, function (req, res) { 
 
   // Prepare output in JSON format 
   response = { 
       first_name:req.body.first_name, 
       last_name:req.body.last_name 
   }; 
   console.log(response); 
   res.end(JSON.stringify(response)); 
}) 
 
app.use(express.static('public')); 

app.get('/index', function (req, res) { 
 res.sendfile('index.html',{maxAge: 1},function(err){
   if(err) console.log('nie udalo sie');
   else console.log('ok');
   });
 }) 



var server = app.listen(8081, function () { 
 
  var host = server.address().address 
  var port = server.address().port 
 
  console.log("Example app listening at http://%s:%s", host, port) 
 
})