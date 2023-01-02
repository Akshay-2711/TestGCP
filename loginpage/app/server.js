var express=require("express");
var app=express();
var url=require("url");
var fs=require("fs");

app.get('/',(req,res)=>{
    res.sendFile("./log.html",{root:__dirname});
});
app.listen(8888);
console.log("Server is listening at port 8888");
