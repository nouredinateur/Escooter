import {useInjectReducer, useInjectSaga} from 'redux-injectors';

import reducer from './reducer';
import saga from './saga';

const key = 'map';

export const useMapSlice = () => {
  useInjectReducer({key, reducer});
  useInjectSaga({key, saga});
};
