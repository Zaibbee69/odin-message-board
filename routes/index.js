const { Router } = require("express")
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render("pages/index.ejs")
})


indexRouter.get("/new", (req, res) => {
    res.render("pages/new.ejs")
})

module.exports = indexRouter;