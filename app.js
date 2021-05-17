const express = require('express');
const port = process.env.PORT||8080;
const hbs = require('hbs');

const path = require('path');
//this is this good//////////

const app = express();

//const staticPath = path.join(__dirname,"./temp");
const StaticPath = path.join(__dirname,"./temp");
const viewsPath = path.join(__dirname,"./temp/views");
const partialPath = path.join(__dirname,"./temp/part");

hbs.registerPartials(partialPath);
app.set('view engine','hbs');
app.set('views',viewsPath);

app.use(express.static(StaticPath));

app.listen(port,()=>
{
    console.log("Listening :",port);
});

app.get("/",(req,res)=>
{
    // res.send("Hello");
    res.render('home',{
        title:"Home",
        homeP:"active"
    });
});

app.get("/login",(req,res)=>
{
    res.render('login_page',{
        title:"Login",
        loginP:"active"
    });
});

app.get("/sign_up",(req,res)=>
{
    res.render("sign_up",{
        title:"Sign up"

    });
});


