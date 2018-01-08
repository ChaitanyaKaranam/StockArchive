import axios from 'axios';

export const BEST_STOCK = 'best_stock';
export const SEARCH_STOCK = 'search_stock';
export const GET_STOCK = 'get_stock';
const BASE_URL = 'http://localhost:5000';

export function getBestStocks(){
    const URL = `${BASE_URL}/api/database/best`;
    const req = axios.get(URL);
    return{
        type:BEST_STOCK,
        payload:req
    }
}

export function searchStocks(symbol){
    const URL=`${BASE_URL}/api/realtime/IntraDay?symbol=${symbol}`;
    const req = axios.get(URL);
    return{
        type:SEARCH_STOCK,
        payload:req
    }
}

export function getStock(symbol){
    console.log('Triggered');
    const URL=`${BASE_URL}/api/realtime/Weekly?symbol=${symbol}`;
    const req = axios.get(URL);
    return{
        type:GET_STOCK,
        payload:req
    }
}

getStock