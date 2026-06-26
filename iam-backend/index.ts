import express from 'express'
import dotenv from 'dotenv'
import { useRouter } from './routes/core';
dotenv.config({ path: `.env` })

const app: express.Application = express();
const port = process.env.NODE_APPLICATION_LISTEN_PORT;

app.use("/api", useRouter())

app.listen(port, () => {
    console.log(`Started backend on the port ${port}!`)
})
