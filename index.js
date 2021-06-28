const express = require('express');

const app = express();

const port = 6900;


app.get('/ERROR', function(req,res){
    res.send('401 ERROR');
})

app.get('/contact', function(req,res){
    console.log(__dirname);
    res.sendFile(__dirname + '/pages/contact.html');
})

app.get('/about', function(req,res){
    console.log(__dirname);
    res.sendFile(__dirname + '/pages/about.html');
})
//
app.post('/home', function(req,res){
    res.send("Your post has been a succsess. Hope you enjoyed clicking that button!");
})

app.get('/home', function(req,res){
    res.sendFile(__dirname + '/pages/homepage.html');
})

app.get('/', function(req,res){
    res.sendFile(__dirname + '/pages/startpage.html');
})

app.listen(port, function(){
    console.log("listening at port: " + port)
});
