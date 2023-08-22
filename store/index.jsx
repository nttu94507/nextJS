import {combineReducers,applyMiddleware,legacy_createStore} from 'redux';
import  reducers  from '../Reducers';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();
const store = legacy_createStore(
    reducers,
    applyMiddleware(sagaMiddleware,logger)
);

// const store = legacy_createStore(reducers)


sagaMiddleware.run(rootSaga);

// const createRootReducer = (history) => combineReducers({
//     router: connectRouter(history),
//     createUser: signupReducer,
//   });

export default store