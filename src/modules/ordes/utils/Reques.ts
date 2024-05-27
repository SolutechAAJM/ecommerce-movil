import { getResponse, postResponse} from "../../admin/CallApi"

export const OrderServices = {
    async getOrder (id:any){
        const response:any = await getResponse(`orders/?iduser=${id}`)
        return response
    },

    async createOrder (data: any) {
        const response:any = await postResponse('orders/create', data)
        return response
    },
}