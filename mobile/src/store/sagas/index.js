
import { all, takeLatest } from 'redux-saga/effects';

import { login } from './login';

import { Creators as LoginActions, Types as LoginTypes } from '~/store/ducks/login';
// import { Creators as SignUpActions, Types as SignUpTypes } from '~/store/ducks/signUp';

// function* loadRepositories() {
//   try {
//     const { username } = yield select(state => state.login);
//     const { data } = yield call(api.get, `/users/${username}/repos`);

//     yield put(RepositoriesActions.loadRepositoriesSuccess(data));
//   } catch (error) {
//     yield put(RepositoriesActions.loadRepositoriesFailure());
//   }
// }

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    // takeLatest(SignUpTypes.SIGNUP_REQUEST, signUpRequest),
  ]);
}
