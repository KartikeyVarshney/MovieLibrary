import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Example from "../components/Example";
import MoviesContext from "../context/MoviesContext";
import axios from "axios";

const Playlist = () => {
  const { open, setOpen } = useContext(MoviesContext);

  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetchPlaylists();
  }, []);

  const fetchPlaylists = () => {
    axios
      .get("http://localhost:5000/api/playlist")
      .then((response) => {
        setPlaylists(response.data);
      })
      .catch((error) => {
        console.error("Error fetching playlists:", error);
      });
  };

  const createPlaylist = () => {
    setOpen(true);
  };

  const addPlaylist = (newPlaylist) => {
    setPlaylists((prevPlaylists) => [...prevPlaylists, newPlaylist]);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/deletePlaylist/${id}`)
      .then(() => {
        setPlaylists((prevPlaylists) =>
          prevPlaylists.filter((playlist) => playlist._id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting playlist:", error);
      });
  };

  return (
    <div className="flex">
      <Navbar />

      <div className="block w-full h-screen justify-center">
        <div>
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-8 lg:max-w-full lg:px-8">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Your Playlists
                </h2>

                <button
                  type="button"
                  onClick={createPlaylist}
                  className="text-white bg-[#050708] hover:bg-[#050708]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
                >
                  <span className="px-2">Create Playlist</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-plus"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </button>
              </div>

              <Example addPlaylist={addPlaylist} />

              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 hover:cursor-pointer">
                {playlists.map((playlist) => (
                  <div
                    key={playlist._id}
                    className="hover:bg-gray-700 delay-50 duration-100 bg-gray-800 p-5 m-6 rounded-lg w-60 group"
                  >
                    <div className="flex justify-between">
                      <h3 className="text-gray-200 font-bold">
                        {playlist.playlistName}
                      </h3>
                      <svg
                        onClick={() => handleDelete(playlist._id)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-trash text-red-900"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      </svg>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-400 font-light mt-2 text-xs">
                        Owner - {playlist.owner}
                      </p>
                      <p className="text-gray-400 font-light mt-2 text-xs">
                        {playlist.public ? "Public" : "Private"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
