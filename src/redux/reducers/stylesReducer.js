import { TOGGLE_ABOUT_LINK, SET_SECTION_VISIBILITY, OPEN_MODAL, CONTACT_MODE} from '../actions/styles.action';

const initialState = {
    showAboutLink: true,
    isSectionVisible: false,
    isModalOpen: false,
    contactMode: false,
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
        case CONTACT_MODE:
            return {
                ...state,
                contactMode: action.payload,
            };
        default:
            return state;
    }
}

export default stylesReducer;