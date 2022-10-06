import axios from 'axios'
import React, { Fragment, useContext } from 'react'
import { useState, useEffect } from 'react'
import { AiFillPlayCircle, AiOutlineClose } from 'react-icons/ai'
import '../Styles/Videos.css'
import NoImg from './descarga.jpg.png'
import {Container} from './NavBar'

function TvShows() {
  const { toggle, inputValue } = useContext(Container)
  const [showData, setShowData] = useState([])
  const input = inputValue
  const [trailer, setTrailer] = useState(true)
  const [title, setTitle] = useState("")
  const Shown = input ? 'search' : 'discover'
  const api = `https://api.themoviedb.org/3/${Shown}/tv`
  const Images = 'https://image.tmdb.org/t/p/w500'
  const tvShows = async () => {
    const data = await axios.get(api, {
      params: {
        api_key: '804d78305bb195eba85be8d4185147ba',
        query: input
      }
    })
    const results = data.data.results
    setShowData(results)
  }
  useEffect(() => {
    setTimeout(() => {
      tvShows()
    }, 100)
    tvShows()
  }, [input])

  const TvShowsTitle = (shows) => {
    setTitle(shows.name)
    setTrailer(!trailer)

  }
  return (
    <>
    <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
    <div className='movies-container'>
      {showData.map((shows) => {
        return (
          <>
            <div id={trailer ? "container" : "NoContainer"}>
              <AiFillPlayCircle color='#fff' fontsize={40} id={trailer ? "playIcon" : "hide"} onClick={() => TvShowsTitle(shows)}/>
              <img src={shows.poster_path ? `${Images}${shows.poster_path}` : NoImg} alt="" onClick={() => TvShowsTitle(shows)}/>
              <h3 id={shows.name.length > 28 ? "smaller-Text" : ""} className={toggle ? "mainColor" : "secondaryColor"}>{shows.name}</h3>
            </div>
          </>
        )
      })}
      <AiOutlineClose id={trailer ? "Nothing" : "Exit1"} className={toggle ? "DarkTheme" : "LightThemeClose"} fontSize={45} color="#fff" cursor={"pointer"} onClick={() => setTrailer(true)}/>
      </div>
      </div>
    </>
  )
}

export default TvShows