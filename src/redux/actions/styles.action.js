export const TOGGLE_ABOUT_LINK = 'TOGGLE_ABOUT_LINK'
export const SET_SECTION_VISIBILITY = 'SET_SECTION_VISIBILITY';


export const toggleAboutLink = () => {
    return {
        type: 'TOGGLE_ABOUT_LINK',
    };
};

export const setSectionVisibility = (isVisible) => ({
    type: SET_SECTION_VISIBILITY,
    payload: isVisible,
  });