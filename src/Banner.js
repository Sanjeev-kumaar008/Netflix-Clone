import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './Requests';
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchdata() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchdata()
    }, []);
    console.log(movie);
    function truncate(str,n){
        return str?.length > n ? str.substring(0,n-1)+"...":str;
    }
    return (
        <header className="Banner"
            style = {{
                backgroundSize : "cover",
                backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }

            }>
            {/* Bg-img */}
            

            <div className="Banner-components">
                <h1 class = "banner_title">{movie?.title || movie?.name || movie ?.original_name}</h1>
            

            {/* title */}
            {/* 2 buttons */}
            <div className = "Banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_desc">
                {truncate(movie?.overview,150)}
            </h1>
            {/* desc */}
            </div>
            <div className = "banner--fadebottom">

            </div>
        </header>
    ) 
}

export default Banner
