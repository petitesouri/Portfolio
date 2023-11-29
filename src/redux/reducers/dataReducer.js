import { GET_EXPERIENCES, SET_SELECTED_IMAGE, CHANGE_IMAGE_BY_DOT, CHANGE_IMAGE_BY_SCROLL } from "../actions/datas.action";

const initialState = {
    data: "",
    index: 0,
    experiences: [],
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_IMAGE:
            return {
                ...state,
                index: action.payload,

            };
        case CHANGE_IMAGE_BY_DOT:
            return {
                ...state,
                index: action.payload,
            };
        case CHANGE_IMAGE_BY_SCROLL:
            return {
                ...state,
                index: action.payload,
            };
        case GET_EXPERIENCES:
            return {
                ...state,
                experiences: action.payload,
            };
        default:
            return state;
    }
}

export default postReducer;