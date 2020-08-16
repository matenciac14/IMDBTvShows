import React, { useState, useEffect } from "react";
import { useScrollData } from "scroll-data-hook";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch, FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import { getMoviesAction } from "../actions/moviesActions";
import { getMoviesActionPage } from "../actions/moviesActions";
import { returnPageHome } from "../actions/movieActions";

const Header = (props) => {
  const { innerHeight: height } = window;
  let a = useSelector((state) => state.movie.changepage);
  const { position } = useScrollData();
  const [textFind, setTextFind] = useState("");
  const [categoryFind, setCategoryFind] = useState("");
  const [pageCurrent, setPageCurrent] = useState(1);

  const dispatch = useDispatch();

  const getmovies = (word, category) => dispatch(getMoviesAction(word, category));
  const getNewPage = (word, category,pageCurrent) => dispatch(getMoviesActionPage(word, category,pageCurrent));
  const returnBack = () => dispatch(returnPageHome());

  useEffect(() => {
    if (textFind !== "" && categoryFind !== "") {
      getmovies(textFind, categoryFind);
    }

    
    console.log("----------------------------------------------"+pageCurrent)
        
  }, [textFind, categoryFind]);

  const setText = (e) => {
    e.preventDefault();
    const { value } = e.target;
    let regex = new RegExp("^[A-Za-z0-9- -]+$");
    if (regex.test(value)) {
      setTextFind(value);
    } else {
      console.log("Caracter no permitido");
      setTextFind("");
    }
  };



  console.log(pageCurrent + "--" + position.y)

  if (position.y >= height * pageCurrent + 100) {
    let aux =pageCurrent;
    console.log("comienza hacer la peticion" +(aux+1));
    setPageCurrent(aux+1)
    getNewPage(textFind, categoryFind,aux+1);    
  }
 

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        {a ? (
          <div className="input-group-prepend">
            <Link
              to={"/"}
              className="input-group-text"
              onClick={() => returnBack()}
            >
              <FaAngleLeft />
            </Link>
          </div>
        ) : (
          <>
            <h4 className="navbar-brand">
              Find Your Favorite MOVIE or TV SHOW
            </h4>

            <div className="form-inline">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Movie"
                  value={textFind}
                  onChange={(e) => setText(e)}
                />
                <select
                  className="custom-select"
                  name="categoryFind"
                  defaultValue={categoryFind}
                  onChange={(e) => setCategoryFind(e.target.value)}
                >
                  <option value="">Choose category...</option>
                  <option value="tv">Tv Shows</option>
                  <option value="movie">Movies</option>
                </select>
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    <FaSearch />
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
