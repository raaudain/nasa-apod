import axios from "axios";
import moment from "moment";

// const newDate = moment(date).format("YYYY-MM-DD");
const key = process.env.REACT_APP_NASA_API_KEY;

export const todaysPic = async () => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}`;
  
    try {
      const res = await axios.get(`${url}`);
    //   console.log(res.data)
    //   res.data.forEach((e) => {
    //     if (e.country !== "US") {
    //       const modified = {
    //         province: e.province,
    //         county: e.county,
    //         country: e.country,
    //         confirmed: e.stats.confirmed,
    //         deaths: e.stats.deaths,
    //         recovered: e.stats.recovered,
    //         latitude: e.coordinates.latitude,
    //         longitude: e.coordinates.longitude,
    //       };
    
    //       data.push(modified);
    //     }
    
  
        return res.data;
    } catch (err) {
      console.error(err);
    }
  };