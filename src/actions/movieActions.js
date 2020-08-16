import { 
  GET_MOVIE_ESPECIFIC,
  GET_MOVIES_ESPECIFICOK,
  GET_MOVIES_ESPECIFICERROR,
  RETURN_BACK,
  GET_TVSEASONS,
  GET_TVSEASONS_OK,
  GET_TVSEASONS_ERROR
  
} from "../types";

import clientAxios from "../config/axios";
import {key} from '../config/key';

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

export function getepisodesFromSeason(id,num) {
console.log(num +"--"+id)

return async (dispatch) => {
  console.log("dispatch")
  dispatch(getEpisodes());
  try {
    const result = await clientAxios.get(
      `tv/${id}/season/${num}?api_key=${key}`
    );
    console.log(result.data);
    dispatch(getEpisodesOk(result.data));
  } catch (error) {
    dispatch(getEpisodesError());
  }
};
}


const getmoviepecific = () => ({
  type: GET_MOVIE_ESPECIFIC,
});

const getmoviepecificOk = (season) => ({
  type: GET_MOVIES_ESPECIFICOK,
  payload: season,
});

const getmoviepecificERROR = () => ({
  type: GET_MOVIES_ESPECIFICERROR,
  payload: true,
});

const retunPage = () => ({
  type: RETURN_BACK,
});

const getEpisodes = () => ({
  type: GET_TVSEASONS
});

const getEpisodesOk = (episodes) => ({
  type: GET_TVSEASONS_OK,
  payload: episodes
});

const getEpisodesError = () => ({
  type: GET_TVSEASONS_ERROR
});