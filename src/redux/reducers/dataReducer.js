import { CHANGE_IMAGE } from "../actions/datas.action";

const initialState = {
    image: 0,
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_IMAGE:
            return {
                image: action.payload,
            };
        default:
            return state;
    }
}

export default postReducer;