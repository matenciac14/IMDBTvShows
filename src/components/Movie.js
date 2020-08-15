import React,{useState, useEffect} from "react";
import TvShows from './TvShows';
import { useSelector } from "react-redux";

const Movie = (props) => {
  const movie = useSelector((state) => state.movie.movie);
  const active = useSelector((state) => state.movie.active);
  const loading = useSelector((state) => state.movie.loading);
  const category = useSelector((state) => state.movies.category);

  const [numSeason, setNumSeason] = useState(0)
 
  if(!active){
      props.history.push("/")
    } 
  useEffect(() => {
    
   
  },[active])




  return (
    <div className="container  mt-3">
      {loading ? "cargando" :(
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
              <h4 className="card-title text-center ">{movie.title ? movie.title : movie.name  }</h4>
            </div>
          </div>
        </div>
        <div className="col-8  border">
          {category === "tv" ? 
         <TvShows
          arr={movie}
         />
         : "para movie"}
        </div>
      </div>
      )}
    </div>
  );
};

export default Movie;
