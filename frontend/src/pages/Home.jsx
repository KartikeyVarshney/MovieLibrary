import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Movies from "../components/Movies";

const Home = () => {
  return (
    <div className="flex">
      <Navbar />

      <div className="block w-full h-screen justify-center">
        <SearchBar />

        <div className="home bg-red">
          <Movies />
        </div>
      </div>
    </div>
  );
};

export default Home;
