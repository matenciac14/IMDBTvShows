import React from "react";
import TvShows from "./TvShows";
import { useSelector } from "react-redux";

const Movie = (props) => {
  const movie = useSelector((state) => state.movie.movie);
  const active = useSelector((state) => state.movie.active);
  const loading = useSelector((state) => state.movie.loading);
  const category = useSelector((state) => state.movies.category.category);

  if (!active) {
    props.history.push("/");
  }

  return (
    <div className="container  mt-5">
      {loading ? (
        "cargando"
      ) : (
        <div className="row mt-2">
          <div className="col-4">
            <div id="card" className="card box">
              <img
                src={
                  movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                    : "https://s1.eestatic.com/2020/06/03/omicrono/Omicrono_494962237_153103745_1024x576.jpg"
                }
                className="card-img-top img-card"
                alt="..."
              />
              <div className="card-footer bg-dark">
                <h4 className="card-title text-center ">
                  {movie.title ? movie.title : movie.name}
                </h4>
              </div>
            </div>
          </div>
          <div className="col-8  ">
            {category === "tv" ? (
              <TvShows arr={movie} />
            ) : (
              <div className="contaner  p-2">
                <h2 className="font-weight-bolder mb-2">{movie.title}</h2>
                <p className="font-italic">Overview : {movie.overview}</p>
                <p>Languafe: {movie.original_language}</p>
                <p>Release Date : {movie.release_date}</p>
                <p>Average: {movie.vote_average}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;
