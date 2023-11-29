export const CHANGE_IMAGE = 'CHANGE_IMAGE'
export const GET_EXPERIENCES = 'GET_EXPERIENCES'

export const changeImage = (dispatch) => {
    return {
        type: CHANGE_IMAGE,
        image: dispatch.payload,
    }
}

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