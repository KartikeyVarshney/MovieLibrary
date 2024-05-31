import React from "react";
import MoveisContext from "./MoviesContext";
import { useState } from "react";
import {movieslist} from '../utils/moveis' 

export default function MoviesContextProvider({children})
{
    const [islaoding , setIsloading] = useState(false)
    const [movies , setMovies] = useState(movieslist)
    return(
        <MoveisContext.Provider value={{movies,setMovies,islaoding,setIsloading}}>
        {children}
        </MoveisContext.Provider>
    )
}