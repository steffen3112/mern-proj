import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    item: [{
        id: uuid(),
        name: "pizza"
    }]
}

export default function(state = initialState, action) {

    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        
        case ADD_ITEM:
            return { ...state, item: [...state.item, action.payload] }

        case DELETE_ITEM:
            let index = state.item.findIndex( item => item == action.payload)
            return {
                ...state, item: [
                    ...state.item.slice(0, index),
                    ...state.item.slice(index + 1)
                ]
            }

        default:
            return state
    }


}