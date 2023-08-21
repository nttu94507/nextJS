export const ADD_PROBE_BEGIN = 'ADD_PROBE_BEGIN';

export const  addprobebegin = () => {
    return {
      type: ADD_PROBE_BEGIN,
    }
  }

export const ADD_PROBE_SUCCESS ='ADD_PROBE_SUCCESS'
export const  addprobecsuccess = (data) => {
    return {
      type: ADD_PROBE_SUCCESS,
      payload: data
    }
  }