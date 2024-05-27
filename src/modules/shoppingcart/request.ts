import { getResponse, postResponse } from "../admin/CallApi";

export const ShopServices = {
    async getProductsByUser (id:string) {
        const response:any = await getResponse(`shoppingcart/${id}`)
        return response
    },

    async modify (data: any) {
        const response:any = await postResponse('shoppingcart/modify', data)
        return response
    },

}