import createStore from 'redux';
import { reducers } from '../Reducers';
export const state = createStore(reducers);