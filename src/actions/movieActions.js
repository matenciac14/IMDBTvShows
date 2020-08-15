import { GET_MOVIE_ESPECIFIC, GET_MOVIES_ESPECIFICOK, GET_MOVIES_ESPECIFICERROR, RETURN_BACK } from "../types";

import clientAxios from "../config/axios";

const key = "b2907782d07859a652052d3bae537475";

export function getMovieDetail(id, category) {
  console.log(category)

  return async (dispatch) => {
    dispatch(getmoviepecific());
    try {
      const result = await clientAxios.get(
        `${category}/${id}?api_key=${key}`
      );
      console.log(result.data);
      dispatch(getmoviepecificOk(result.data));
    } catch (error) {
      dispatch(getmoviepecificERROR());
    }
  };
}

export function returnPageHome() {
  return (dispatch)=>{
    dispatch(retunPage());
  }
}

const getmoviepecific = () => ({
  type: GET_MOVIE_ESPECIFIC,
});

const getmoviepecificOk = (movie) => ({
  type: GET_MOVIES_ESPECIFICOK,
  payload: movie,
});

const getmoviepecificERROR = () => ({
  type: GET_MOVIES_ESPECIFICERROR,
  payload: true,
});

const retunPage = () => ({
  type: RETURN_BACK,
});