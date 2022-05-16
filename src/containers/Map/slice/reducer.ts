import produce from 'immer';
import {AnyAction} from 'redux';
import {
  SET_LOCATION,
  WebService,
  GET_STAIONS_OF_CONTRACT,
  GET_STAIONS_OF_CONTRACT_ERROR,
  GET_STAIONS_OF_CONTRACT_SUCCESS,
} from './constants';

import {IreducerState} from './types';

export const initialState: IreducerState = {
  error: false,
  loading: false,
  cityName: 'lyon',
  cityLocation: {
    latitude: 45.76342,
    longitude: 4.834277,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
  station: {},
};
const MapReducer = produce((draft, action) => {
  switch (action.type) {
    case SET_LOCATION:
      draft.cityLocation = action.location;
      break;
    case GET_STAIONS_OF_CONTRACT:
      draft.error = true;
      draft.station = {};
    case GET_STAIONS_OF_CONTRACT_SUCCESS:
      draft.error = false;
      draft.station = action.stations;
      break;
  }
}, initialState);

export default MapReducer;
