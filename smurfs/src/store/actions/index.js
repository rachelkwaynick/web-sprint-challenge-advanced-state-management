import axios from 'axios';

//action types
export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';


export const POST_SMURFS_START = 'POST_SMURFS_START';
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS';
export const POST_SMURFS_FAILURE = 'POST_SMURFS_FAILURE';

//action creators (async)

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_SMURFS_START });

        //fetch Data

        axios
            .get('http://localhost:3333/smurfs')
            .then((res) => {
                console.log('res.data from action', res.data)
                dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: FETCH_SMURFS_FAILURE, payload: err.message})
            })
    }
}

export const postSmurfs = (newSmurf) => {
    return (dispatch) => {
        dispatch({ type: POST_SMURFS_START });

        //post Data

        axios
            .post('http://localhost:3333/smurfs', newSmurf)
            .then((res) => {
                console.log('res.data from post action', res.data)
                dispatch({ type: POST_SMURFS_SUCCESS, payload: res.data})
            })
            .catch((err) => {
                dispatch({type: POST_SMURFS_FAILURE, payload: err.message})
            })
    }
}
