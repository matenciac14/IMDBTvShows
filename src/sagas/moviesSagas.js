import { GET_MOVIES, GET_MOVIES_OK, GET_MOVIES_ERROR,GET_MOVIESPAGE_OK,GET_MOVIESPAGE_ERROR } from "../types";
import {key} from '../config/key';
import {put, call, takeLatest  } from 'redux-saga/effects';
import {apicall} from '../config/axios';

 function* getMovies({payload}){
     const category=payload.category;
     const word= payload.word;
     const url = `https://api.themoviedb.org/3/search/${category}?api_key=${key}&query=${word}`
     //console.log(url)
    try {
       const result = yield call(apicall,'get',url)
       const movies=result.results
       if(movies){
           yield put({type:GET_MOVIES_OK, payload:movies})
       }else{
           yield put({type:GET_MOVIES_ERROR, payload:true})
       }
    } catch (error) {
        console.log(error)
        
    }
}

function* getmovienamePageOk({payload}){
    const category2=payload.category;
     const word2= payload.word;
     const page2 = payload.pageCurrent;
     const url2 = `https://api.themoviedb.org/3/search/${category2}?api_key=${key}&query=${word2}&page=${page2}`
     console.log(url2)
    try {
       const result2 = yield call(apicall,'get',url2)
       const moviesnew=result2.results

       if(moviesnew){
           yield put({type:GET_MOVIESPAGE_OK, payload:moviesnew})
       }else{
           yield put({type:GET_MOVIESPAGE_ERROR, payload:true})
       }
    } catch (error) {
        console.log(error)
        
    }
}

//Watchers
export default function* movies(){
    yield takeLatest  (GET_MOVIES, getMovies)
    yield takeLatest  (GET_MOVIESPAGE_OK,getmovienamePageOk)
}