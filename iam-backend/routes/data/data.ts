import { Router } from 'express'
import { CreateOrderSchema } from '../../schema/data/order';
import { createOrder } from '../../services/dataservice';
import { checkJwtToken } from '../../middleware/authorization';

const router = Router();

router.get("/orders", (req, res) => {
    res.send(["Row #1", "Row #2", "Row #3"])
})
router.post("/orders", async (req, res, next) => {
    try {
        
        const body = CreateOrderSchema.parse(req.body);
        const order = await createOrder(body);
        console.log(order)
        res.status(201).json(order);

    } catch (error) {
        next(error)
    }

})
export const useDataRouter = () => router

