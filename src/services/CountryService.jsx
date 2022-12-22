import axios from "axios"
import { baseurl } from "../constants/Constants"


export const getAllCountries = ()=>{
    axios.get(baseurl+'utility/counties').then((response)=>{
        return response.data;
    }).catch(()=>{
        console.log("error while getting contries")
    })
}