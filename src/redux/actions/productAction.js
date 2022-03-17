import * as types from "../constants/actionTypes";

export const getAllProduct = (products) => {
    return {
        type: types.GET_ALL_PRODUCT,
        payload: products
    }
}