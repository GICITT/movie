import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

export default function MoviCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li src="lista" className="cardImg">
      <div className="card">
        {" "}
        <Link to={"/detail/" + movie.id}>
          <img
            width={260}
            height={400}
            className="movieImg"
            src={imageUrl}
            alt={movie.tile}
          />

          <div>{movie.title} </div>
        </Link>
      </div>
    </li>
  );
}
