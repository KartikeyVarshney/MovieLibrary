import React, {useState} from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Movies from "../components/Movies";
import Details from "../components/Details";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <Navbar />

      <div className="block w-full h-screen justify-center">
        <SearchBar />

        <div className="home bg-red">
          <Movies setOpen={setOpen} />
          <Details open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default Home;
