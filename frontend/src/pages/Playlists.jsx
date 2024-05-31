import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'

const Playlist = () => {
  return (
    <div className="flex">
      <Navbar />
      
      <div className="block w-full h-screen justify-center">
        <SearchBar />

        <div className="playlists">
          <h1>Playlists</h1>
        </div>
      </div>
    </div>
  )
}

export default Playlist
