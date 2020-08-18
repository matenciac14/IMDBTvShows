import axios from "axios";

//const urlb = "https://api.themoviedb.org/3/";

const clientAxios = axios
  .create
  //      {
  //     baseURL:urlb
  // }
  ();

export default clientAxios;

export const apicall = (method, url) => {
  //const urlb = "https://api.themoviedb.org/3/";
  return fetch(url, {
    method,
  }).then((Response) => Response.json());
};
