import {
  GET_MOVIES,
  GET_MOVIES_OK,
  GET_MOVIES_ERROR,
  GET_MOVIESPAGE_OK,
  GET_MOVIESPAGE_ERROR,
} from "../types";

const initialState = {
  movies: [],
  category: "",
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        loading: true,
        category: action.payload,
      };
    case GET_MOVIES_OK:
      return {
        ...state,
        loading: false,
        error: null,
        movies: action.payload,
      };
    case GET_MOVIESPAGE_ERROR:
    case GET_MOVIES_ERROR:
      return {
        ...state,
        error: true,
      };
    case GET_MOVIESPAGE_OK:
      console.log(action.payload);
      return {
        ...state,
        movies: [...state.movies.concat(action.payload)],
      };

    default:
      return state;
  }
}
