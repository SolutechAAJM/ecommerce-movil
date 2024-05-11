import { postResponse } from "../../admin/CallApi"

export const authServices = {
    async loginRequest (data:any) {
        const response:any = await postResponse('auth/login', data)
        return response
    },
    async SignUpRequest (data:any){
        const response:any = await postResponse('auth/register', data)
        return response
    }
}
