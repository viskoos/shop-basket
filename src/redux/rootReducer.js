import { combineReducers } from "redux";
import { basketReducer } from './basketReducer'
import { storeReducer } from './storeReducer'

export const rootReducer = combineReducers({
    basket: basketReducer,
    products: storeReducer
})