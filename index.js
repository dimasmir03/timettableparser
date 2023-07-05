var PORT = process.env.PORT || 3030;
var express = require("express");
var app = express();
var server = require("http").createServer(app);

app.get("/group/:name",(req,res)=>{
    res.send(req.params.name);
})
app.get("/",(req,res)=>{
    res.send("main page");
})


server.listen(PORT,"")