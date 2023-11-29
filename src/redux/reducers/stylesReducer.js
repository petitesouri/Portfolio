import { TOGGLE_ABOUT_LINK } from "../actions/styles.action";

const initialState = {
    showAboutLink: true,
}

const stylesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ABOUT_LINK:
            return {
                ...state,
                showAboutLink: !state.showAboutLink,
            };
        default:
            return state;
    }
}

export default stylesReducer;