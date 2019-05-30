var express = require('express');
var app = express();
var jsonArray;
var access_token = '';
var bodyParser = require('body-parser');
var fs = require("fs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
      



var expressWs = require('express-ws')(app);

//var port  = process.env.PORT || 3000;

        






app.post('/ashu', function (req, res) {

fs.appendFile('temp.txt', JSON.stringify(req.body) , function(err){

  if(err){

   console.log(err);
  }
  else{
    console.log('successfully written to file');
  }




})

     
  
});


app.post('/bonu', function (req, res) {

fs.appendFile('temp1.txt', JSON.stringify(req.body) , function(err){

  if(err){

   console.log(err);
  }
  else{
    console.log('successfully written to file');
  }




})

     
  
});


app.post('/sonu', function (req, res) {

fs.appendFile('temp2.txt', JSON.stringify(req.body) , function(err){

  if(err){

   console.log(err);
  }
  else{
    console.log('successfully written to file');
  }

})
  
});










app.listen(4000, function(){
  console.log('express app setup complete');
});