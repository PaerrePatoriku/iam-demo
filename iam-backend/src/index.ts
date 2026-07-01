import express from 'express'
import dotenv from 'dotenv'
import { useRouter } from '@/routes/core';
import { checkJwtToken } from '@/middleware/authorization';
import { attachUser } from '@/middleware/userAttachment';
dotenv.config({ path: `.env` })

const app: express.Application = express();
const port = process.env.NODE_APPLICATION_LISTEN_PORT;

/*
    Middlewares that identify user to allow checking for user/role based permissions
    ALL paths are protected by the stack in this demo. No public access.
*/
const identityStack = [
    checkJwtToken(),
    attachUser
]

app.use(express.json())
app.use("/api", identityStack, useRouter())

app.listen(port, () => {
    console.log(`Started backend on http://localhost:${port}!`)
})
