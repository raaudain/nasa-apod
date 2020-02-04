import React, {useState, useEffect} from "react";
import PODCard from "./PODCard";
import Header from "./Header";
import axios from "axios";
import moment from "moment";

export default function POD(){  
    
    const [pod, setPod] = useState([]);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const key = "OtzHcO999QiozRF5WdhggeWhhMjwAXr3Whff1daa";
        const newDate = moment(date).format("YYYY-MM-DD");

        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${newDate}`)
            .then(res => {
                // Sets the array of objects from the API
                const apod = res.data;
                setPod(apod);
            })
            .catch(err => console.log(`${err.response}`));
    },[date])
    
    return(
        <div>
            <Header 
                date={date} 
                setDate={setDate} 
            />

            <PODCard  
                key={pod.date} 
                title={pod.title} 
                hdurl={pod.hdurl} 
                url={pod.url} 
                copyright={pod.copyright} 
                date={moment(pod.date).format("M/D/YYYY")} 
                explanation={pod.explanation}
                media_type={pod.media_type}
            />
        </div>
    );
}