import { getResponse } from "../../admin/CallApi"

export const DashServices = {
    async productsRequest () {
        const response:any = await getResponse('product/')
        return response
    }
}