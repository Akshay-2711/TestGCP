 const express=require('express');
 const app=express();
var data="Hello Akshay, Welcome to google";
 app.get('/',(req,res)=>{
    res.send("<h1>"+data+"</h1>");
 });

 app.get('/products',(req,res)=>{
    var products=[
        {id:1,title:'Mobile',description:'Electronic device',price:15000,quantity:2},
        {id:2,title:'Shirt',description:'Shirts for men',price:500,quantity:5}
    ]
    res.send(products);
 })

 app.listen(8888);
 console.log("app is listening on port 8888"); 