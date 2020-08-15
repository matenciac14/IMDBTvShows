import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch, FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import { getMoviesAction } from "../actions/moviesActions";
import { returnPageHome } from "../actions/movieActions";

const Header = (props) => {
  let a = useSelector((state) => state.movie.changepage);
  const [textFind, setTextFind] = useState("");
  const [categoryFind, setCategoryFind] = useState(""); 

  const dispatch = useDispatch();

  const getmovies = (word, category) => dispatch(getMoviesAction(word, category));
  const returnBack = () => dispatch(returnPageHome());

  const setText = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let regex = new RegExp("^[A-Za-z0-9- -]+$");
    if (regex.test(value)) {
      console.log(name, value);
      setTextFind(value);
    } else {
      console.log("Caracter no permitido");
      setTextFind("");
    }
  };
  
 

  useEffect(() => {
    if (textFind !== "" && categoryFind !=="" ) {
      getmovies(textFind, categoryFind );
    } 

    console.log(categoryFind)
  }, [textFind,categoryFind]);



  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        {a ? (
          <div className="input-group-prepend">
            <Link to ={"/"} className="input-group-text" onClick={()=>returnBack()}>
            <FaAngleLeft />
            </Link>
              
          </div>
        ) : (
          <>
            <h4 className="navbar-brand">Find Your Favorite MOVIE or TV SHOW</h4>

            <div className="form-inline">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Movie"
                  value={textFind}
                  onChange={(e) => setText(e)}
                />
                <select className="custom-select"  name="categoryFind" defaultValue={categoryFind} onChange={(e)=>setCategoryFind(e.target.value)}>
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
