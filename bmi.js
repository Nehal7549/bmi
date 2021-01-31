//jshint esversion:6
const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
  var w=Number(req.body.weight);
  var h=Number(req.body.height);
  var bmi=w/(h*h);
  res.send("the bmi is"+bmi);
});

app.listen(3000,function(){
  console.log("listening on port no 3000");
});
