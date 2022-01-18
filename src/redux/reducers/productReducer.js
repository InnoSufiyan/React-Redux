import { ActionTypes } from "../constants/action-types"

const initialState = {
    product: [
        {
            id: 1,
            title: "Sufiyan",
            category: "programmer"
        }
    ],
    AllProducts: [
        {
            id: 1,
            title: "Sufiyan",
            category: "programmer"
        }
    ]
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.EDIT_PRODUCT:
            return {...state, product: action.payload};
        case ActionTypes.SET_PRODUCTS:
            return {...state, product: action.payload};
        default:
            return state;
    }
}