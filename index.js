const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


app.get("/", function(req , res) {
   // res.send("Hello World"); now we will render the pagies which are in views folder with the help of ejs
   res.render("index", {title: "Home Page"});
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});