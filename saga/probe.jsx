import { call, put, takeLatest,all } from 'redux-saga/effects';

const ADD_PROBE_BEGIN = 'ADD_PROBE_BEGIN';
const ADD_PROBE_SUCCESS = 'ADD_PROBE_SUCCESS';



const FETCH_PROBE_BEGIN = 'FETCH_PROBE_BEGIN';
const FETCH_PROBE_SUCCESS = 'FETCH_PROBE_SUCCESS';

export const fetchProbeBegin =async(id)=>{
    const src = await fetch(`https://randomuser.me/api/`)
        .then((reponse)=> {return reponse.json()})
        .then((result)=>{
            console.log(result)
        })
}

// const probeSaga =async()=>{
//     await takeLatest(FETCH_PROBE_BEGIN,fetchProbeBegin)
// }

function* probeSaga() {
    yield takeLatest(FETCH_PROBE_BEGIN,fetchProbeBegin)
}

export default probeSaga;