import { put, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate } from '~/services/navigation';

import { Creators as LoginActions, Types as LoginTypes } from '~/store/ducks/login';

import api from '~/services/api';

const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem('@Pizzaria:token', token);
  } catch (err) {
    console.tron.log('Erro ao armazenar token na Storage');
  }
};

export function* login(action) {
  try {
    const { email, password } = action.payload;
    const token = yield call(api.post, 'sessions', { email, password });

    // if (!token) {
    //   throw new Error('Erro ao realizar login.');
    // }

    // if (!isCustomer) {
    //   throw new Error('Administradores não podem fazer login no aplicativo mobile.');
    // }

    yield call(storeToken, token);
    yield put(LoginActions.loginSuccess(email));

    navigate('Menu');
  } catch (err) {
    yield put(LoginActions.loginFailure(err));
  }
}
