import * as actionTypes from './actionTypes';

export const getApiAction = () => {
 return { type: actionTypes.GET_API_ASYNC
 }
};

export const deleteItemAction = (index) => {
    return { type: "DELETE", index}
};

export const editItemAction = (index, data) => {
    return { type: actionTypes.GET_API_ASYNC
    }
};

export const addItemAction = (data) => {
    return { type: "ADD",data
    }
};

