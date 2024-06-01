import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Playlists from "./pages/Playlists";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Details from "./components/Details";
import MoviesContextProvider from "./context/MoviesContextProvider";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <BrowserRouter>
        <MoviesContextProvider>
          <Routes>

            <Route
              exact
              path="/"
              element={isLoggedIn ? <Home /> : <Navigate to="/signup" />}
            />
           
            <Route
              exact
              path="/signup"
              element={<Signup onLogin={handleLogin} />}
            />
           
            <Route
              exact
              path="/login"
              element={<Login onLogin={handleLogin} />}
            />
           
            {isLoggedIn && (
              <>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/playlists" element={<Playlists />} />
                <Route exact path="/details" element={<Details />} />
              </>
            )}
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
