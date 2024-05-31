import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Playlists from './pages/Playlists'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/playlists" element={<Playlists />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
