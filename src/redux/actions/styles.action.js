export const TOGGLE_ABOUT_LINK = 'TOGGLE_ABOUT_LINK'
export const SET_SECTION_VISIBILITY = 'SET_SECTION_VISIBILITY'
export const OPEN_MODAL = 'OPEN_MODAL'
export const CONTACT_MODE = 'CONTACT_MODE'
  
export const openModal = (isModalOpen) => ({
    type: OPEN_MODAL,
    payload: isModalOpen,
});

export const contactMode = (contactMode) => ({
    type: CONTACT_MODE,
    payload: contactMode,
});

export const toggleAboutLink = () => {
    return {
        type: 'TOGGLE_ABOUT_LINK',
    };
};

export const setSectionVisibility = (isVisible) => ({
    type: SET_SECTION_VISIBILITY,
    payload: isVisible,
});
