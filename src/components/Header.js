import React, { useState, useEffect } from "react";
import { useScrollData } from "scroll-data-hook";
import { useDispatch, useSelector } from "react-redux";
import { FaSearch, FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import { getmoviename, getmovienamePageOk } from "../actions/moviesActions";
import { retunPage } from "../actions/movieActions";

const Header = (props) => {
  const { innerHeight: height } = window;
  let a = useSelector((state) => state.movie.changepage);
  const { position } = useScrollData();
  const [textFind, setTextFind] = useState("");
  const [categoryFind, setCategoryFind] = useState("");
  const [pageCurrent, setPageCurrent] = useState(1);

  const dispatch = useDispatch();

  const getmovies = ({ word, category }) =>
    dispatch(getmoviename({ word, category }));
  const getNewPage = ({ word, category, pageCurrent }) =>
    dispatch(getmovienamePageOk({ word, category, pageCurrent }));
  const returnBack = () => dispatch(retunPage());

  useEffect(() => {
    if (textFind !== "" && categoryFind !== "") {
      getmovies({ word: textFind, category: categoryFind });
    }
    setPageCurrent(1);
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

  if (position.y >= height * pageCurrent + 100) {
    let aux = pageCurrent;
    setPageCurrent(aux + 1);
    const page = aux + 1;
    getNewPage({ word: textFind, category: categoryFind, pageCurrent: page });
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
