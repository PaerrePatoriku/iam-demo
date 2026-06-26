import express from 'express'
import dotenv from 'dotenv'
dotenv.config({ path : `.env` })

const app : express.Application = express();
const port = process.env.NODE_APPLICATION_LISTEN_PORT;

app.get("/", (req, res) => {
    res.send("GET Response")
})

app.listen(port, () => {
    console.log(`Started backend on the port ${port}!`)
})
