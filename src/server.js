//import express
const express = require("express");
//assigning web server app constant
const app = express();
const userRouter = require("./routes/users")
const showRouter = require("./routes/shows")
//const db = require("./db/db")
const seed = require("../seed")
//import userRouter for use in out web server


app.use(express.json());
app.use('/', userRouter)
app.use('/', showRouter)

app.listen(3000, async () => {
    await seed();
    console.log("Listening on port 3000");
});