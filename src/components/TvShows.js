import React, { useState } from "react";

const TvShows = ({ arr }) => {
  const result = arr.seasons;
  console.log(result);
  const [num, setNum] = useState(0);
  console.log(num);

  if (num) {
    console.log("busca " + num + "-");
  }

  return (
    <div className="container-fluid p-0">
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
                  onClick={() => setNum(index)}
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
            <a
              className="list-group-item list-group-item-action active p-0"
              id="list-home-list"
              data-toggle="list"
              href="#list-home"
              role="tab"
              aria-controls="home"
            >
              <ul className="list-group list-group-horizontal m-0 ">
                <li className="list-group-item bg-transparent w-20">1</li>
                <li className="list-group-item bg-transparent w-100">Dapibus ac facilisis in</li>
              </ul>
            </a>
            {/* <a
              className="list-group-item list-group-item-action"
              id="list-profile-list"
              data-toggle="list"
              href="#list-profile"
              role="tab"
              aria-controls="profile"
            >
              Profile
            </a>
            <a
              className="list-group-item list-group-item-action"
              id="list-messages-list"
              data-toggle="list"
              href="#list-messages"
              role="tab"
              aria-controls="messages"
            >
              Messages
            </a>
            <a
              className="list-group-item list-group-item-action"
              id="list-settings-list"
              data-toggle="list"
              href="#list-settings"
              role="tab"
              aria-controls="settings"
            >
              Settings
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvShows;
