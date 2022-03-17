import * as types from "../constants/actionTypes";

const initialState = {
    images: [],
}

const productReducer = (state = initialState, action) => {
    var data = null;
    switch (action.type) {
        case types.GET_SLIDER_IMG:
            data = action.payload.docs.map((doc) => ({
                ...doc.data()
            }));
            return {
                ...state,
                images: data
            }
        default: return state
    }
}

export default productReducer;