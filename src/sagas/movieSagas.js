import {
  GET_MOVIE_ESPECIFIC,
  GET_MOVIES_ESPECIFICOK,
  GET_MOVIES_ESPECIFICERROR,
  GET_TVSEASONS,
  GET_TVSEASONS_OK,
  GET_TVSEASONS_ERROR,
} from "../types";
import { key } from "../config/key";
import { put, call, takeLatest } from "redux-saga/effects";
import { apicall } from "../config/axios";

function* getmoviepecific({ payload }) {
  const category2 = payload.category.category;
  const id = payload.id;
  const url2 = `https://api.themoviedb.org/3/${category2}/${id}?api_key=${key}`;
  try {
    const result = yield call(apicall, "get", url2);

    if (result) {
      yield put({ type: GET_MOVIES_ESPECIFICOK, payload: result });
    } else {
      yield put({ type: GET_MOVIES_ESPECIFICERROR, payload: true });
    }
  } catch (error) {
    console.log(error);
  }
}

function* getEpisodes({ payload }) {
  const num = payload.num;
  const id = payload.id;
  const url2 = `https://api.themoviedb.org/3/tv/${id}/season/${num}?api_key=${key}`;

  try {
    const result = yield call(apicall, "get", url2);
    //console.log(result)

    if (result) {
      yield put({ type: GET_TVSEASONS_OK, payload: result });
    } else {
      yield put({ type: GET_TVSEASONS_ERROR, payload: true });
    }
  } catch (error) {
    console.log(error);
  }
}

//Watchers
export default function* movies() {
  yield takeLatest(GET_MOVIE_ESPECIFIC, getmoviepecific);
  yield takeLatest(GET_TVSEASONS, getEpisodes);
}
