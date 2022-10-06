import React from 'react'
import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import "../Styles/TrailerMovie.css"
import { useEffect } from 'react';

function TrailerTrends({TrendsTitle}) {
    const [video, setVideo] = useState("");
    const [videoURL, setVideoURL] = useState("");
    
    function handleSearch() {
        setVideo(TrendsTitle)
        movieTrailer(video).then((res) => {
        setVideoURL(res);
        });
    }
    useEffect(() => {
        handleSearch()
    }, [videoURL])
  return (
    <>
        <div className='Container'>
        </div>
        <div className='player'>
            <ReactPlayer url={videoURL} controls={true} width={"900px"} height={"600px"}/>
        </div>
    </>
    )
}

export default TrailerTrends