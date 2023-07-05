var PORT = process.env.PORT || 3030;
var express = require("express");
var app = express();
var server = require("http").createServer(app);
var axios = require("axios")

app.get("/group",(req,res)=>{
    res.send("group");
    console.log("group:");
    console.log(req.params.name);
})
app.get("/",async (req,res)=>{
    
    console.log("main:");
    console.log(req.query.name)

    var result = await axios.post('https://',{
    params: {
        tab: '7',
        gp_name: '2бАСУ2',
        gp_id: '8700',
    }})

    res.send(result);
})


server.listen(PORT,"")