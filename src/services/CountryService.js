import { apiHelper } from "./apiHelper";


export const getAllCountries = ()=>{
    apiHelper.get(`/csc/countries`).then((response)=>{
        return response.data;
    }).catch((err)=>{
        console.log("error while getting contries",err)
        return err;
    })
}