const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));// Serve static files from the "public" directory and dirname is use to get the current directory path


app.get("/", function(req , res) {
   // res.send("Hello World"); now we will render the pagies which are in views folder with the help of ejs
   res.render("index", {title: "Home Page"});
});

app.get("/profile/:username", function(req, res){
    res.send(`Welcome, ${req.params.username}`);
});

app.get("/profile/:username/:age", function(req, res){
    res.send(`Welcome, ${req.params.username}. You are ${req.params.age} years old.`);
});


app.listen(4000, () => {
    console.log("Server is running on port 4000");
});