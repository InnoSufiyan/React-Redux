import { ActionTypes } from "../constants/action-types"

const initialState = {
    AllProducts: []
}

export const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, AllProducts: action.payload};
        default:
            return state;
    }
}