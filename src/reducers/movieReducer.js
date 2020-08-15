import { 
  GET_MOVIE_ESPECIFIC,
  GET_MOVIES_ESPECIFICOK,
  GET_MOVIES_ESPECIFICERROR,
  RETURN_BACK
} from "../types";

const initialState = {
    movie:{},
    active:false,
    error: null,
    changepage: false,
    loading: false,
    episodes:[]
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_MOVIE_ESPECIFIC:
        return {
          ...state,
          changepage:true,
          active:true,
          loading:true
        };
      case GET_MOVIES_ESPECIFICOK:
        return {
          ...state,
          changepage: true,
          active:true,
          error: null,
          movie: action.payload,
          loading:false
        };
      case GET_MOVIES_ESPECIFICERROR:
        return {
          ...state,
          error: true,
          changepage: false,
          active:false,
          loading:false
        };
      case RETURN_BACK:
        return{
          ...state,
          changepage: false,
          active:false,
          movie:{},
          loading:false

        }
  
      default:
        return state;
    }
  }
  