import * as types from "../constants/actionTypes";
import sliderFirebase from "../../firebase/sliderFirebase";

export const getSilerImg = (data) => {
    return {
        type: types.GET_SLIDER_IMG,
        payload: data
    }
}

export const getSilerImgRequest = () => {
    return async (dispatch) => {
        const response = await sliderFirebase.getAll();
        dispatch(getSilerImg(response));
    }
}