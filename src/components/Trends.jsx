import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import {AiOutlineClose, AiFillPlayCircle} from 'react-icons/ai'
import NoImg from './descarga.jpg.png'
import {Container} from './NavBar'
import '../Styles/Videos.css'


function Trends() {
  const {toggle} = useContext(Container)
  const api = `https://api.themoviedb.org/3/`
  const Images = 'https://image.tmdb.org/t/p/w500'
  const trendsShown = `/trending/all/week`
  const [trendArray, setTrendsArray] = useState([])
  const [trendTitle, setTrendTitle] = useState("")
  const [trailer, setTrailer] = useState(true)
  const Trends = async() => {
    const data = await axios.get(`${api}${trendsShown}`, {
      params : {
        api_key : '804d78305bb195eba85be8d4185147ba'
      }
    })
    const results = data.data.results
    setTrendsArray(results)
  }
  useEffect(() => {
    setTimeout(() => {
      Trends()
    }, 100)
  }, [])

  const TrendTitle = (trend) => {
    setTrendTitle(trend.title)
    setTrailer(!trailer)
  }
  return (
    <>
    <div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
      <div className='movies-container'>
        {trendArray.map((trend) => {
          return(
            <>
            <div id={trailer ? 'container' : "NoContainer"}>
               <AiFillPlayCircle color='#fff' fontsize={40} id={trailer ? "playIcon" : "hide"} onClick={() => TrendTitle(trend)}/>
               <img src={trend.poster_path ? `${Images}${trend.poster_path}` : NoImg} alt='' onClick={() => TrendTitle(trend)}/>
               <h3 id="smaller-Text" className={toggle ? 'mainColor' : 'secondaryColor '} >{trend.title}</h3>
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

export default Trends