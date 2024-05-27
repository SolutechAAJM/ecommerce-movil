import { getResponse} from "../../admin/CallApi"

export const ProductServices = {
    async getProduct (id:number){
        const response:any = await getResponse(`product/${id}`)
        return response
    },
}