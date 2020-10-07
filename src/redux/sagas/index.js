import { all } from 'redux-saga/effects';
import login from './login';
import signup from './signup';
import getStories from './getStories';
import getAuthenticated from './authenticated';

export default function* rootSaga(){
  yield all([
    login(),
    signup(),
    getStories(),
    getAuthenticated()
  ]);
}