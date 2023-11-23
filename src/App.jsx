import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import MoviesGrid from "./components/Movies-grid";
import MovieDetail from "./pages/MovieDetail";
import Serch from "./components/Serch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className="title">Movies</h1>
        </Link>
        <Serch />
      </header>
      <Routes>
        <Route path="/detail/:movieId" element={<MovieDetail />} />
        <Route path="/" element={<MoviesGrid />} />
      </Routes>
    </Router>
  );
}

export default App;
