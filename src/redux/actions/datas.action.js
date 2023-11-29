export const GET_EXPERIENCES = 'GET_EXPERIENCES'
export const SET_SELECTED_IMAGE = 'SET_SELECTED_IMAGE'
export const CHANGE_IMAGE_BY_DOT = "CHANGE_IMAGE_BY_DOT";
export const CHANGE_IMAGE_BY_SCROLL = "CHANGE_IMAGE_BY_SCROLL";

export const setSelectedImage = (indexOrIncrements) => {
  if (Number.isInteger(indexOrIncrements)) {
    return changeImageByDot(indexOrIncrements);
  } else {
    return changeImageByScroll(indexOrIncrements);
  }
}

export const changeImageByDot = (index) => {
  return { 
    type: CHANGE_IMAGE_BY_DOT, 
    payload: index };
};

export const changeImageByScroll = (increments) => {
  return { 
    type: CHANGE_IMAGE_BY_SCROLL, 
    payload: increments };
};

export const getExperiences = () => {
    return async (dispatch) => {
      try {
        const response = await fetch("/datas/projects.json"); 
        const data = await response.json();
        const experiences = data.experiences;
  
        dispatch({ type: GET_EXPERIENCES, payload: experiences });
      } catch (error) {
        console.error("Erreur lors du chargement des données", error);
      }
    };
  };