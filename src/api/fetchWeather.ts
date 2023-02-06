
import axios from 'axios';
import {WeatherData} from "../../types"


const URL ='https://api.openweathermap.org/data/2.5/weather';
const APIKey ='6e52daf8438d59fb4873293fd664ddc4';

export const fetchWeather= async(query:string)=>{
const { data:weatherData }= await axios.get(URL,{ params:{
    q:query,
    units:'matric',
    lat:40.863372,
    lon:-74.113181,
    AppID:APIKey,

}});

return weatherData as  WeatherData;

}