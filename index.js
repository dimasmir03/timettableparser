var PORT = process.env.PORT || 3030;
var express = require("express");
var app = express();
var server = require("http").createServer(app);

app.get("/group",(req,res)=>{
    res.send("group");
    console.log("group:");
    console.log(req.params.name);
})
app.get("/",(req,res)=>{
    res.send(req.query.name);
    console.log("main:");
    console.log(req.query.name)
})


server.listen(PORT,"")