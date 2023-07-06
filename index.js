var PORT = process.env.PORT || 3030;
var express = require("express");
var app = express();
var server = require("http").createServer(app);
const cheerio = require('cheerio')
const fetch = require('node-fetch');

var parse = require('node-html-parser');

app.get("/group",(req,res)=>{
    //console.log(req.params.name);
})

app.get("/",async (req,res)=>{
    console.log("main:");

    headers= {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
    const data = {
        'tab': '7',
        'gp_name': '2бАСУ2',
        'gp_id': '8700'
    }
    domain = "https://raspisanie.madi.ru/tplan/tasks/tableFiller.php"

    fetch(domain,{
        method: 'POST',
        body: new URLSearchParams(data),
        headers: headers
        }).then((result) => {
            console.log("get text");
            result.text()
            .then((result) => {
                console.log("send text");
             res.send(result);   
            }).catch((err) => {
                
            })
            //res.send(result.text())
        }).catch((err) => {
            //res.send("error: "+err)
        });

    res.send("done")
})

server.listen(PORT,"")