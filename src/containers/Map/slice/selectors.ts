import {createSelector} from 'reselect';
import {RootState} from '../../../types';
import {initialState} from './reducer';

/**
 * Direct selector to the BookingDetails state domain
 */

const selectDomain = (state: RootState) => state.reducerState || initialState;

/**
 * Other specific selectors
 */

export const selectStations = createSelector(
  [selectDomain],
  substate => substate.station,
);
