import { ADD_IN_BASKET, DELETE_IN_BASKET } from './types'

const initialState = {
    purchase: []
}

export const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_IN_BASKET:
            return { ...state, purchase: state.purchase.concat(action.payload) }
        case DELETE_IN_BASKET:
            return {
                ...state, purchase: state.purchase.filter(item => {
                    return item !== action.payload
                })
            }
        default: return state
    }
}