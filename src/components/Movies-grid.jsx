import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Agregada la importación de useLocation

import MoviCard from "./MoviCard";
import "./movies-grid.css";
import { get } from "./httpClient";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const location = useLocation(); // Agregada la obtención de la ubicación
  const search = new URLSearchParams(location.search).get("search");

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setIsLoading(false);
    });
  }, [search, page]);

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={true}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className="moviesGrid">
        {movies.map(function (movie) {
          return <MoviCard key={movie.id} movie={movie} />;
        })}
      </ul>
    </InfiniteScroll>
  );
}
