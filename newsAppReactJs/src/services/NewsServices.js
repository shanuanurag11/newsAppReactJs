import {BASE_URL}  from "../Component/Utils/AppUtils"
import axios from 'axios';


export const API_KEY = 'b65c81e47d5b4a2d91f89ebc96435219'
export async function getTopNewsDetail() {
    try {
        let res = await axios.get(BASE_URL.URL+'top-headlines?country=in&apiKey='+API_KEY);
   
        return res;
      
    } catch (e) {
        
        throw handler(e)
    }
}

export async function getNewsByCat(data) {
    try {
        let res = await axios.get(BASE_URL.URL+'top-headlines?country=in&category='+data+'&apiKey='+API_KEY);
        return res;
    } catch (e) {
        throw handler(e)
    }
}



export function handler(err) {
    let error = err;

    if (err.response && err.response.data.hasOwnProperty("message")) {
        error = err.message;
    }
    else if (!err.hasOwnProperty("message")) {
        error = err.toJSON();
    }
    alert(error)
    return error;
}