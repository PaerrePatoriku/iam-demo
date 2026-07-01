import { CreateOrderPayload } from "@/schema/data/order";

export async function createOrder(data : CreateOrderPayload) {
    //implement: actual in memory db logic.
    console.log("Trying to create", data)
    return data;
}