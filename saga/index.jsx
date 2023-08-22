import { all } from 'redux-saga/effects';
import probeSaga from './probe';

// const rootSaga =async()=>{
//     await all([
//         probeSaga()
//     ])
// }

function* rootSaga() {
    yield all([
        probeSaga()
    ])
}

export default rootSaga;

