import { z } from 'zod'

export const CreateOrderSchema = z.object({
    consignor : z.string(),
    consignee : z.string(),
    grossWeight : z.number().optional(),
    deliveryDate : z.string().optional()
});

export type CreateOrderPayload = z.infer<typeof CreateOrderSchema>;