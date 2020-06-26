import { SHOW_ADD_ALERT, HIDE_ADD_ALERT, CREATE_PRODUCT } from "./types"

const initialState = {
    addAlert: null,
    products: [
        { id: 0, name: 'Суповой Набор', description: 'Суповой набор из свежих овощей.', price: 1300 },
        { id: 2, name: 'Помидорчики', description: 'Помидорчики с грядки, выращенные на говне.', price: 322 },
        { id: 3, name: 'Сральная бумага', description: 'Мягкая, 5 слоев.', price: 1337 }
    ]
}

export const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_ADD_ALERT:
            return { ...state, addAlert: action.payload }
        case HIDE_ADD_ALERT:
            return { ...state, addAlert: null }
        case CREATE_PRODUCT:
            return { ...state, products: state.products.concat(action.payload) }
        default: return state
    }
}