const express = require('express')
const app = express()
const routes = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use("/", routes)

app.listen(3000, () => {
    console.log("App listen on port 3000")
})