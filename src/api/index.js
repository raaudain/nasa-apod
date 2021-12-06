import axios from "axios";
import moment from "moment";

// const newDate = moment(date).format("YYYY-MM-DD");
const key = process.env.REACT_APP_NASA_API_KEY;

export const todaysPic = async () => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}`;
  
    try {
      const res = await axios.get(`${url}`);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  };
