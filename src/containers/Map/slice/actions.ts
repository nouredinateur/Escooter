import {
  SET_LOCATION,
  GET_STAIONS_OF_CONTRACT,
  GET_STAIONS_OF_CONTRACT_ERROR,
  GET_STAIONS_OF_CONTRACT_SUCCESS,
  WebService,
} from './constants';

/*** */
export function setLocationAction(location: any) {
  return {type: SET_LOCATION, location};
}

export function getStationsOfaContractAction(payload?: any) {
  return {type: GET_STAIONS_OF_CONTRACT, payload};
}
export function getStationsOfaContractSuccessAction(stations: any) {
  return {type: GET_STAIONS_OF_CONTRACT_SUCCESS, stations};
}
export function getStationsOfaContractErrorAction(error: any) {
  return {type: GET_STAIONS_OF_CONTRACT_ERROR, error};
}
