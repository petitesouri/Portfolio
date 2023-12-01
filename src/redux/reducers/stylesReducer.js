import { TOGGLE_ABOUT_LINK } from "../actions/styles.action";
import { SET_SECTION_VISIBILITY } from '../actions/styles.action';

const initialState = {
    showAboutLink: true,
    isSectionVisible: false,
}

const stylesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ABOUT_LINK:
            return {
                ...state,
                showAboutLink: !state.showAboutLink,
            };
        case SET_SECTION_VISIBILITY:
            return {
                ...state,
                isSectionVisible: action.payload,
            };
        default:
            return state;
    }
}

export default stylesReducer;