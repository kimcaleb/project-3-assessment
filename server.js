const   
    express = require("express"),
    app = express(),
    PORT = 3000,
    ejsLayouts = require("express-ejs-layouts"),
    axios = require("axios");
    

// Middleware
app.use(express.json());
app.use(express.static(__dirname + "/public")); //allows us to attach static css files to ejs files

// App Configuration
app.set("view engine","ejs");
app.use(ejsLayouts);


// Routes
app.get("/", (req,res) =>{
    res.render("index");
});

app.get("/posts", (req,res)=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(objects =>{
        let object = objects.data;
        res.render("allposts", {object} );
    });
});

// Listening on
app.listen(PORT,(err) =>{
    console.log( err || `Listening on Port ${PORT}`);
});