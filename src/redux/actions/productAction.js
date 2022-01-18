import { ActionTypes } from "../constants/action-types"

export const editProduct = (products) => {
    return {
        type:  ActionTypes.EDIT_PRODUCT,
        payload: products
    }
}
export const setProducts = (products) => {
    return {
        type:  ActionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const selectedProduct = (product) => {
    return {
        type:  ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}
export const removeProduct = () => {
    return {
        type:  ActionTypes.REMOVE_PRODUCT,
        payload: {}
    }
}