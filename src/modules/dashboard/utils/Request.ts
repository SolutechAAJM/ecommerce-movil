import { getResponse, postResponse } from "../../admin/CallApi"

export const DashServices = {
    async productsRequest () {
        const response:any = await getResponse('product/')
        return response
    },

    async getCategoriesRequest()
    {
        const response:any = await getResponse('categories/');
        return response;
    },

    async getTypesRequest()
    {
        const response:any = await getResponse('types/');
        return response;
    },

    async getProductsBy(data:any){
        const response:any = await postResponse('product/search', data);
        return response;
    },

    async addProductToCart(data:any){
        const response:any = await postResponse('shoppingcart/addproduct', data);
        return response;
    }
}