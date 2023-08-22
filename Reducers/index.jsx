import {combineReducers} from 'redux';
// const { combineReducers } = require("redux");
import probeReducer from './probeReducer';
import customerReducer from './customerReducer';
// const { orderReducer } = require('./orderReducer')


const createRootReducer=() =>combineReducers({
    probeReducer,
    customerReducer,
})

export default createRootReducer;