import { Router } from 'express'

const router = Router();

router.get("/orders", (req, res) => {
    res.send("GET Data Response")
})
export const useDataRouter = () => router

