import { combineReducers } from 'redux';

import filterSlice from '../features/filter/filterSlice';

const rootReducer = combineReducers({
    filter: filterSlice,
});

export default rootReducer;
