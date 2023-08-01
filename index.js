const express = require('express');
const { urlRouter } = require('./routes/url.routes');
const { connection } = require('./db')
require("dotenv").config()

const app = express();

app.use(express.json())

app.get('/', (req, res)=>{
    res.status(200).send("Basic API endpoint");
})

app.use("/url", urlRouter)


app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log("Successfully Connected to the database server")
    } catch (error) {
        console.log(error)
        console.log("Cannot connect to the database server")
    }
    console.log(`Server is running at PORT ${process.env.PORT}`)
})