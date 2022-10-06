import React, { Fragment } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import {AiFillPlayCircle, AiOutlineClose} from 'react-icons/ai'
import NoImg from './descarga.jpg.png'
import {Container} from './NavBar'
import '../Styles/Videos.css'
import { useContext } from 'react'
import TrailerMovies from '../Trailers/TrailerMovies'

function Movies() {
  const {toggle, inputValue} = useContext(Container)
  const input = inputValue
  const [movies, setMovies] = useState([])
  const [trailer, setTrailer] = useState(true)
  const [movieTitle, setMovieTitle] = useState("")
  const Shown = input ? 'search' : 'discover'
  const api = `https://api.themoviedb.org/3/${Shown}/movie`
  const Images = 'https://image.tmdb.org/t/p/w500'
  const MovieCall = async () => {
    const data = await axios.get( api ,{
      params: {
        api_key: '804d78305bb195eba85be8d4185147ba',
        query: input
      }
    })
    const results = data.data.results
    setMovies(results)
  }
  useEffect(() => {
    setTimeout(()=> {
      MovieCall()
    },100)
  }, [input])

  const MoviesTitle = (movie) =>{
    setMovieTitle(movie.title)
    setTrailer(!trailer)
  }
  return (
    <>
    <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
    <div className='movies-container'>
      {movies.map((movie) =>  {
        return(
        <>
          <div id={trailer ? 'container' : "NoContainer"}>
            <AiFillPlayCircle color='#fff' fontsize={40} id={trailer ? "playIcon" : "hide"} onClick={() => MoviesTitle(movie)}/>
            <img src={movie.poster_path ? `${Images}${movie.poster_path}` : NoImg} alt='' onClick={() => MoviesTitle(movie)}/>
            <h3 id={movie.title.length > 28 ? "smaller-Text" : ""} className={toggle ? 'mainColor' : 'secondaryColor '} >{movie.title}</h3>
          </div>
        </>
        )
      })}
      {trailer ? console.log : <TrailerMovies moviesTitle={movieTitle}/>}
      <AiOutlineClose id={trailer ? "Nothing" : "Exit1"} className={toggle ? "DarkTheme" : "LightThemeClose"} fontSize={45} color="#fff" cursor={"pointer"} onClick={() => setTrailer(true)}/>
      </div>
      </div>
      
    </>
  )
}

export default Movies