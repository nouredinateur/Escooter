/**
 *
 */
const scope = 'src/containers/Map';
const APY_KEY = '62e354ca604253c43915eb3bc7656c2252621e5e';

/*** */
export const WebService = {
  LYON: `https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=${APY_KEY}`,
  TOULOUSE: `https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=${APY_KEY}`,
};

/*** */
export const SET_LOCATION = `${scope}/SET_LOCATION`;

export const GET_STAIONS_OF_CONTRACT = `${scope}/GET_STAIONS_OF_CONTRACT`;
export const GET_STAIONS_OF_CONTRACT_SUCCESS = `${scope}/GET_STAIONS_OF_CONTRACT_SUCCESS`;
export const GET_STAIONS_OF_CONTRACT_ERROR = `${scope}/GET_STAIONS_OF_CONTRACT_ERROR`;
