import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => {
    return {
        type: GET_ITEMS
    }
}

export const addItem = (item) => {

    console.log("Adding Item:", item);

    return {
        type: ADD_ITEM,
        payload: item
    }

}

export const deleteItem = (item) => {

    console.log("Deleting Item: ", item);

    return {
        type: DELETE_ITEM,
        payload: item
    }

}