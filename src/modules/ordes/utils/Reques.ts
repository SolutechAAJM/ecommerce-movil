import { getResponse} from "../../admin/CallApi"

export const OrderServices = {
    async getOrder (id:any){
        const response:any = await getResponse(`orders/?iduser=${id}`)
        return response
    },
}