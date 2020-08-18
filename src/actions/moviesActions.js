import {
  GET_MOVIES,
  GET_MOVIESPAGE_OK,
  //GET_MOVIES_OK, GET_MOVIES_ERROR,GET_MOVIESPAGE_ERROR
} from "../types";
//import {key} from '../config/key';

//import clientAxios from "../config/axios";

//REDUX THUNK
// export function getMoviesAction(word, category) {
//   return async (dispatch) => {
//     dispatch(getmoviename(category));
//     try {
//       const result = await clientAxios.get(
//         `search/${category}?api_key=${key}&query=${word}&page=${page}`
//       );
//       console.log(result.data.results);
//       dispatch(getmovienameOk(result.data.results));
//     } catch (error) {
//       dispatch(getmovienameERROR());
//     }
//   };
// }

// export function getMoviesActionPage(word, category,page) {

//   return async (dispatch) => {
//     try {
//       const result = await clientAxios.get(
//         `search/${category}?api_key=${key}&query=${word}&page=${page}`
//       );
//       //console.log(result.data);
//       console.log(result.data.results);
//       dispatch(getmovienamePageOk(result.data.results));
//     } catch (error) {
//       dispatch(getmovienamePageERROR());
//       console.log(error)
//     }
//   };
// }
// const getmovienameOk = movies => ({
//   type: GET_MOVIES_OK,
//   payload: movies,
// });

//  const getmovienameERROR = () => ({
//   type: GET_MOVIES_ERROR,
//   payload: true,
// });

// const getmovienamePageERROR = () => ({
//   type: GET_MOVIESPAGE_ERROR,
//   payload: true,
// });

export const getmoviename = (category) => ({
  type: GET_MOVIES,
  payload: category,
});

export const getmovienamePageOk = (moviesNew) => ({
  type: GET_MOVIESPAGE_OK,
  payload: moviesNew,
});
