import { CHANGE_IMAGE, GET_EXPERIENCES } from "../actions/datas.action";

const initialState = {
    image: 0,
    experiences: [],
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_IMAGE:
            return {
                image: action.payload,
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