import { ADD_IN_BASKET, SHOW_ADD_ALERT, HIDE_ADD_ALERT, DELETE_IN_BASKET, CREATE_PRODUCT } from "./types";

export function showAddAlert(text) {
    return {
        type: SHOW_ADD_ALERT,
        payload: text
    }
}

export function hideAddAlert() {
    return {
        type: HIDE_ADD_ALERT
    }
}

export function addInBasket(purchase) {
    return dispatch => {
        dispatch(showAddAlert('Продукт был успешно добавлен в корзину'))
        dispatch({
            type: ADD_IN_BASKET,
            payload: purchase
        })

        setTimeout(() => {
            dispatch(hideAddAlert())
        }, 2000)
    }
}

export function deleteInBasket(purchase) {
    return dispatch => {
        dispatch(showAddAlert('Продукт был убран из корзины'))
        dispatch({
            type: DELETE_IN_BASKET,
            payload: purchase
        })

        setTimeout(() => {
            dispatch(hideAddAlert())
        }, 2000)
    }
}

export function createProduct(product) {
    return dispatch => {
        dispatch(showAddAlert('Продукт был создан и добавлен в "Товары"'))
        dispatch({
            type: CREATE_PRODUCT,
            payload: product
        })

        setTimeout(() => {
            dispatch(hideAddAlert())
        }, 2000)
    }
}