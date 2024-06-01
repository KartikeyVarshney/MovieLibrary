import React, {useState} from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Movies from "../components/Movies";
import Details from "../components/Details";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);


  return (
    <div className="flex">
      <Navbar />

      <div className="block w-full h-screen justify-center">
        <SearchBar />

        <div className="home bg-red">
          <Movies setOpen={setOpen} setSelectedMovie={setSelectedMovie} />
          <Details open={open} setOpen={setOpen} movieData={selectedMovie} />
        </div>
      </div>
    </div>
  );
};

export default Home;
