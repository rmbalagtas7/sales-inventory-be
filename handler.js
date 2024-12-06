const express = require("express")
const app = express()
const mongoose = require("moongose")
const port = 5001;

app.get('/ping', (req, res) => {
    return res.status(200).json({
        message: "Backend Testing"
    })
})

app.listen(port, () => console.log("server listening on " + port))