import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Agregada la importación de useLocation

import MoviCard from "./MoviCard";
import "./movies-grid.css";
import { get } from "./httpClient";
import Spinner from "./Spinner";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation(); // Agregada la obtención de la ubicación
  const search = new URLSearchParams(location.search).get("search");

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className="moviesGrid">
      {movies.map(function (movie) {
        return <MoviCard key={movie.id} movie={movie} />;
      })}
    </ul>
  );
}
