import React from 'react'
import { Search } from 'lucide-react';
import Dropdown from './Dropdown.jsx';
import { useState } from 'react';

const SearchBar = () => {
  const [value , setValue] = useState("")
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
