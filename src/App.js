import "./App.css";
import Home from "./Page/Home/Home";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/films/:id" element={<MovieInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
