import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    POST_SMURFS_START,
    POST_SMURFS_SUCCESS,
    POST_SMURFS_FAILURE
} from '../actions'

const initialState = {
    isLoading: false,
    smurfsData: [],
    error: ''
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_SMURFS_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                smurfsData: action.payload
            }
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case POST_SMURFS_START: 
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case POST_SMURFS_SUCCESS: 
            return {
                ...state, 
                isLoading: false,
                smurfData: action.payload
            }
        case POST_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}