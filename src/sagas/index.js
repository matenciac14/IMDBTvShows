import {all} from 'redux-saga/effects'
import moviesSagas from './moviesSagas'
import movieSagas from './movieSagas'


export default function* rootSaga(){
    yield all([
        moviesSagas(),
        movieSagas()

    ])
}