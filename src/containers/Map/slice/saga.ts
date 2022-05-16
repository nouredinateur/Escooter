import {AnyAction} from 'redux';
import {call, put, takeLatest} from 'redux-saga/effects';

import {
  getStationsOfaContractAction,
  getStationsOfaContractErrorAction,
  getStationsOfaContractSuccessAction,
} from './actions';

import {SET_LOCATION, GET_STAIONS_OF_CONTRACT, WebService} from './constants';

export function* getStations({payload}: AnyAction) {
  try {
    const response: AnyAction = yield call(async () => {
      return await fetch(WebService.LYON, {
        ...payload,
      });
    });

    console.log('here saga:', response.json());

    yield put(getStationsOfaContractSuccessAction(response.json()));
  } catch (error) {
    console.log('error');
    yield put(getStationsOfaContractErrorAction(error));
  }
}

export default function* busyTimeSaga() {
  yield takeLatest(GET_STAIONS_OF_CONTRACT, getStations);
}
