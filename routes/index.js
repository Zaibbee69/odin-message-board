const { Router } = require("express")
const indexRouter = Router();

// Sample Messages
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];


indexRouter.get("/", (req, res) => {
    res.render("pages/index.ejs", { messages })
})


indexRouter.get("/new", (req, res) => {
    res.render("pages/new.ejs")
})

indexRouter.post("/new", (req, res) => {
    console.log("Post Request Made!")
    res.redirect("/")
})

module.exports = indexRouter;