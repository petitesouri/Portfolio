export const CHANGE_IMAGE = 'CHANGE_IMAGE'

export const changeImage = (dispatch) => {
    return {
        type: CHANGE_IMAGE,
        image: dispatch.payload,
    }
}