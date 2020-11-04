const express = require("express");
const hbs = require("hbs");
const app = express();

//Puerto para que Heroku escuche
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public" ));

//Express HBS Engine
hbs.registerPartials(__dirname + "/views/partials")
app.set("view engine", "hbs");

//Helpers
hbs.registerHelper("getAnio",() => {
    return new Date().getFullYear();
})


app.get("/", (req,ans) => {
    ans.render("partials/home");
});

app.get("/about", (req, ans) =>{
    ans.render("partials/about");
})

console.log(`Listening port ${port}`);
app.listen(port);