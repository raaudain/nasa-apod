import React from 'react';
import axios from "axios";

export default function Search() {

    axios
        .get(`https://images-api.nasa.gov/`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err.message));

    return (
        <>

        </>
    )
}