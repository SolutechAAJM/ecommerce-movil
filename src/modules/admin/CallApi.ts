import axios, { AxiosResponse, AxiosError } from "axios";
import { urlBase } from "../../../config";

axios.defaults.validateStatus = () => true;

export const getResponse = async (url:string) =>{
    try {
        const response = await axios.get(`${urlBase}${url}`);
        return response;
      } catch (error) {
        return error;
      }
}

export const postResponse = async (url: string, data: any): Promise<AxiosResponse | AxiosError> => {
    try {
      const response: AxiosResponse = await axios.post(`${urlBase}${url}`, data);
      return response;
    } catch (error:any) {
      return error;
    }
  };