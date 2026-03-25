const express = require('express');
const app = express();
const port = 3000;

// Importing Routers
const indexRouter = require("./routes/index");

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
});