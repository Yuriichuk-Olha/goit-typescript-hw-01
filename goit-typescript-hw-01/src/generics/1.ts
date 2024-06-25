import axios from 'axios';

async function fetchData(url:string):Promise<T> {
    try {
        const response = await axios.get<T>(url);
        if(typeof response.data ==='object' && response!== null)     
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching from ${url}: ${error}`);
        }
}