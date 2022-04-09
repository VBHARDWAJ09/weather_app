import axios from "axios";

const url="https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "44e7878b34d28f6524e1302add37a0a1";

export const getData= async(city,country)=>{
    const data =  await axios.get(`${url}?q=${city},${country}&appid=${API_KEY}&units=metric`)
    return data;
}
