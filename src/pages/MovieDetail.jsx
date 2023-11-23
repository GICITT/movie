import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { get } from "../components/httpClient";
import "./MovieDetail.css";
import Spinner from "../components/Spinner";

export default function MovieDetail() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);

  if (isLoading) {
    return (
      <>
        {" "}
        <Spinner />
      </>
    );
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className="detailsContainer">
      <img className="imgCol" src={imageUrl} alt={movie.title} />
      <div className="colMovieDetails">
        <p>
          {" "}
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre, index) => (
            <span key={index}>{genre.name} </span>
          ))}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
