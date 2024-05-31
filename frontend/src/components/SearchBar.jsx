import React, { useContext, useEffect } from 'react'
import { Search, Signal } from 'lucide-react';
import Dropdown from './Dropdown.jsx';
import { useState } from 'react';
import {movieslist} from '../utils/moveis.js'
import MoviesContext from '../context/MoviesContext.js';
// import axioes from 'axios'
// import dotenv from 'dotenv'
// dotenv.config({path})

const SearchBar = () => {
  const [value , setValue] = useState("")
  const {movies , setMovies} = useContext(MoviesContext)
  useEffect(()=>{
    const abortController = new AbortController() // for preventing race condition..
    const signal = abortController.signal
    async function HitApi()
    {
      try{
        // setIsloading(true)
        let OMDB_API = `http://www.omdbapi.com/?t=${value}&apikey=bf8866a9`
        const res = await fetch(OMDB_API,{signal})
        let data = await res.json()
        setMovies([data])
        console.log(data)
      }
      catch(e)
      {
        console.log(e.message)
      }
      finally{
        // setIsloading(false)
      }
      
      
    }
    if(value.trim()!=="")
    { 
      HitApi()    
    }
    else{
      setMovies(movieslist)
    }
       
    return ()=>{
      abortController.abort()
    }
  

  },[value ,setMovies])
  function handleChange(e)
  {
    setValue(e.target.value)
      console.log(value)
  }
 
  return (
    <div className='h-20'>
      <div className="search flex h-20 justify-center items-center">

        <input className='w-2/4 p-2 py-2.5 pl-4 border rounded-s-full'
        type="text" placeholder="Search Movies..." onChange={(e)=>{handleChange(e)}}/>

        <button className='p-2 px-4 py-2.5 bg-slate-400 border-2 rounded-e-full'>
          <Search />
        </button>
      </div>

      <Dropdown />
      
    </div>
  )
}

export default SearchBar
