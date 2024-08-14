import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {headers} from '../constants/index'

export const getCountryData =createAsyncThunk("covid/getCountryData",
 async ({code, query})=>{

    //Get the country's Covid information according to the iso code
const params = {iso:code, q:query};

  const req1=  axios
  .get(`https://covid-19-statistics.p.rapidapi.com/reports`,
 { params, headers});

 //get countrys detail
 const req2 =  axios
 .get(code ? `https://restcountries.com/v3.1/alpha/${code}`
 :`https://restcountries.com/v3.1/name/${query} `);

 // synchronous request 
 const responses = await Promise.all([req1, req2]);

 //spread region object to parent object in covid data
const covid ={
...responses[0].data.data[0],
...responses[0].data.data[0].region
}

//remove unnecessary datas
delete covid.region
delete covid.cities

//actions payload
    return {covid, country:responses[1].data[0]};
   
})

