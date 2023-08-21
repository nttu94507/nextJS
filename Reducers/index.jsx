import combineReducers from 'redux';
// const { combineReducers } = require("redux");
import { probeReducer } from './probeReducer';
// const { orderReducer } = require('./orderReducer')

export const reducers = combineReducers({
    probeReducer,
})