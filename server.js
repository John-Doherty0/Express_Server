const express = require("express");

const app = express();

app.get("/", function(req, res){
res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function(req,res){
  res.send("<p>My email address is jjdohertywork@gmail.com</p>");
});

app.get("/about", function(req, res){
  res.send("<p>My name is John.<br> I like to surf and code.</p>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
