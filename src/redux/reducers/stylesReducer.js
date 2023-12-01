import { TOGGLE_ABOUT_LINK } from "../actions/styles.action";
import { SET_SECTION_VISIBILITY, OPEN_MODAL } from '../actions/styles.action';

const initialState = {
    showAboutLink: true,
    isSectionVisible: false,
    isModalOpen: false,
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
        case OPEN_MODAL:
            return {
                ...state,
                isModalOpen: action.payload,
            };
        default:
            return state;
    }
}

export default stylesReducer;