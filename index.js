var PORT = process.env.PORT || 3030;
var express = require("express");
var app = express();
var server = require("http").createServer(app);

app.get("/group/:name",(req,res)=>{
    console.log("group get")
    console.log(req.params.name);
    res.send("done");
})

server.listen(PORT,"",()=> console.log("Сервер запущен"))