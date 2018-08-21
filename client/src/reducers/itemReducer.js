import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState = {
    item: [],
    loading: false
}

export default function(state = initialState, action) {

    switch(action.type) {
        case GET_ITEMS:
        console.log("GET ITEMS", action.payload)
            return {
                ...state, 
                item: action.payload,
                loading: false
            }
        
        case ADD_ITEM:
            return { ...state, item: [...state.item, action.payload] }

        // Mongo DB Backend autogenerates an _id
        case DELETE_ITEM:
            return {
                ...state, item: 
                    state.item.filter( item => item._id !== action.payload)
                
            }

        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state
    }


}