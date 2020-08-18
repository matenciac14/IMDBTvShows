import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getEpisodes } from "../actions/movieActions";

const TvShows = ({ arr }) => {
  const episodes = useSelector((state) => state.movie.season.episodes);

  const result = arr.seasons;
  const [num, setNum] = useState(0);

  const dispatch = useDispatch();
  const getEpisodesSeason = ({ id, num }) => dispatch(getEpisodes({ id, num }));

  useEffect(() => {
    //console.log(result);
    if (result[num].season_number !== 0) {
      console.log("setNum(1)");
      getEpisodesSeason({ id: arr.id, num: 1 });
    } else {
      getEpisodesSeason({ id: arr.id, num });
    }
  }, []);

  const getepisodes = (nume, id) => {
    console.log("enviaaaaa" + nume + "----" + num);
    setNum(nume);
    if (nume === 0 && result[0].season_number === 1) {
      getEpisodesSeason({ id, num: nume + 1 });
    } else {
      getEpisodesSeason({ id, num: nume + 1 });
    }
  };

  return (
    <div className="container-fluid p-0 ">
      <h2>SEASONS</h2>
      <nav className="table-responsive">
        <ul className="pagination pagination-md m-0">
          {result
            ? result.map((mov, index) => (
                <li
                  className={
                    num === index ? "page-item active mx-1" : "page-item  mx-1"
                  }
                  aria-current="page"
                  key={index}
                  onClick={() => getepisodes(index, arr.id)}
                >
                  <span className="page-link">{index + 1}</span>
                </li>
              ))
            : null}
        </ul>
      </nav>
      <div className="row mt-2">
        <div className="col-12">
          <div className="list-group" id="list-tab" role="tablist">
            {episodes
              ? episodes.map((episode, index) => (
                  <a
                    className="list-group-item list-group-item-action  p-0"
                    id="list-home-list"
                    data-toggle="list"
                    href="#list-home"
                    role="tab"
                    aria-controls="home"
                    key={index}
                  >
                    <ul className="list-group list-group-horizontal m-0 ">
                      <li className="list-group-item bg-transparent w-20">
                        {episode.episode_number}
                      </li>
                      <li className="list-group-item bg-transparent w-100">
                        {episode.name}
                      </li>
                    </ul>
                  </a>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvShows;
