import { Router } from 'express'
import { useDataRouter } from './data/data';
const router = Router();

router.get("/", (req, res) => {
    res.send("GET Response")
})
router.use("/data", useDataRouter())

export const useRouter = () => router

