var express=require('express');
var app=express();

app.get("/",(req,res)=>{
    res.send(
        "<h1>Contoso Group </h1>"
        +"<hr/>"
        +"<h3>Smart devices for sale</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Laptop</li>"
        +"<li>Mobile</li>"
        +"<li>Tablet</li>"
        +"</ol>"
        );
});

app.get("/login",(req,res)=>{
    res.send(
        "<h1>Contoso Group </h1>"
        +"<hr/>"
        +"<form>"
        +"<input/>"
        +"<br/>"
        +"<input/>"
        +"<button><>Login</button>"
        +"<li>ravi tambade</li>"
        +"</form>"
        );
});

app.get("/aboutus",(req,res)=>{
    res.send(
        "<h1> About Contoso Group </h1>"
        +"<hr/>"
        +"<h3>owner ravi tambade</h3>"
        +"<h3>our products</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>Laptop</li>"
        +"<li>Mobile</li>"
        +"<li>Tablet</li>"
        +"</ol>"
        );
});

app.listen(9000);
console.log("Contoso Group server running on 9000");