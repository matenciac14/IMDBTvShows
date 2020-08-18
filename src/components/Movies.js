import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getmoviepecific } from "../actions/movieActions";


const Movies = (props) => {
  const moviesx = useSelector((state) => state.movies.movies);
  const category = useSelector((state) => state.movies.category);

  const [showP, setShowP] = useState("");
  const [movies, setMovies] = useState(moviesx);

  const dispatch = useDispatch();
  const getMovieAction = ({id, category}) => dispatch(getmoviepecific({id, category}));

  const setSpecificMovie = (movie) => {
    getMovieAction({id:movie, category});
    props.history.push("/movie");
  };
  useEffect(() => {
    setMovies(moviesx)       
  }, [moviesx])

  

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 m-0 border-0">
        {movies === undefined
          ? " digite el nombre de una pelicula"
          : movies.map((movie, index) => (
              <div
                key={index}
                className="col mb-4"
                onMouseOver={() => setShowP(movie.id)}
                onMouseOut={() => setShowP(null)}
                onDoubleClick={() => setSpecificMovie(movie.id, category)}
              >
                <div className="card ">
                  <img
                    src={
                      movie.backdrop_path
                        ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                        : "https://s1.eestatic.com/2020/06/03/omicrono/Omicrono_494962237_153103745_1024x576.jpg"
                    }
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body bg-dark m-0 ">
                    <h4 className="card-title text-center ">
                      {movie.title ? movie.title : movie.name}
                    </h4>
                    {showP === movie.id ? (
                      <div>
                        <h5 className="text-center">
                          {movie.name !== movie.original_name
                            ? movie.original_name
                            : null}
                        </h5>
                        <p className="card-text text-center">
                          {movie.overview}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default Movies;
