import * as ActionTypes from './ActionTypes';

export const AddToState = (name,value) => ({
    type: ActionTypes.ITEM_ADD,
    payload: name,
    value:value

});

export const addFolder = (name,value) => (dispatch) => {
    dispatch(AddToState(name,value));
   
}

