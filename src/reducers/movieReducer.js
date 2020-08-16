import { 
  GET_MOVIE_ESPECIFIC,
  GET_MOVIES_ESPECIFICOK,
  GET_MOVIES_ESPECIFICERROR,
  RETURN_BACK,
  GET_TVSEASONS,
  GET_TVSEASONS_OK,
  GET_TVSEASONS_ERROR
} from "../types";

const initialState = {
    movie:{},
    active:false,
    error: null,
    changepage: false,
    loading: false,
    season:{},
    loadingE: false,
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
          season:{},
          loading:false

        }
      case GET_TVSEASONS:
        return{
          ...state,
          loadingE:true,
          error:null
        }
      case GET_TVSEASONS_OK:
        return{
          ...state,
          season:action.payload


        }
      case GET_TVSEASONS_ERROR:
        return{
          ...state,
          error:true,
          loadingE:false
        }
  
      default:
        return state;
    }
  }
  