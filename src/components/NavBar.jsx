import React from 'react'
import { useState } from 'react'
import {HiSearch} from 'react-icons/hi'
import { Routes, Route, NavLink } from 'react-router-dom';
import '../Styles/NavBarStyle.css'
import Movies from './Movies';
import Trends from './Trends';
import TvShows from './TvShows';

export const Container = React.createContext()

function NavBar() {
    const [toggle, setToggle] = useState(true);
    const [inputValue, setInputValue] = useState('');
  
    return (
    <Container.Provider value={{toggle, inputValue}}>
    <>
        <nav className={toggle ? '' : 'navBarColor'}>
            <div className='nav-options'>
                <h1 id={toggle ? '' : 'heading'}>HEDYFLIX</h1>
                <NavLink to="" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
                <span id={toggle ? 'Movies' : 'MoviesLight'}>Movies</span>
                </NavLink>
                <NavLink to="/TvShows" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
                <span id={toggle ? 'Movies' : 'MoviesLight'}>Tv Shows</span>
                </NavLink>
                <NavLink to="/Trending" style={({isActive}) => {return {color:isActive ? '#fff' : '#EE9B00'}}}>
                <span id={toggle ? 'Movies' : 'MoviesLight'}>Trending</span>
                </NavLink>
            </div>
            <div className='input-group'>
                <input type='text' placeholder='Search' onChange={(e) =>setInputValue(e.target.value)}/>
                <HiSearch fontSize={21} color="black" id='search' />
                <div id='Color-switcher' onClick={() => setToggle(!toggle)}>
                    <div id={toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
                </div>
            </div>
        </nav>
        <Routes>
            <Route path='' element={<Movies/>}/>
            <Route path='TvShows' element={<TvShows/>}/>
            <Route path='Trending' element={<Trends/>}/>
        </Routes>
    </>
    </Container.Provider>
  )
}

export default NavBar