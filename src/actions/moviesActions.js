import { GET_MOVIES, GET_MOVIES_OK, GET_MOVIES_ERROR } from "../types";

import clientAxios from "../config/axios";

const key = "b2907782d07859a652052d3bae537475";

export function getMoviesAction(word, category) {
  return async (dispatch) => {
    dispatch(getmoviename(category));
    try {
      
      const result = await clientAxios.get(
        `search/${category}?api_key=${key}&query=${word}`
      );
      console.log(result.data);
      dispatch(getmovienameOk(result.data));
    } catch (error) {
      dispatch(getmovienameERROR());
    }
  };
}

const getmoviename = (category) => ({
  type: GET_MOVIES,
  payload:category
});

const getmovienameOk = (movies) => ({
  type: GET_MOVIES_OK,
  payload: movies,
});

const getmovienameERROR = () => ({
  type: GET_MOVIES_ERROR,
  payload: true,
});


