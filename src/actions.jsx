

const addItem = (item) => (dispatch) => {
    return dispatch ({
        type: ADD_ITEM,
        payload: item
    })
}

const removeItem = (item) => (dispatch) => {
    return dispatch ({
        type: REMOVE_ITEM,
        payload: item
    })
}