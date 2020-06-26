import React from 'react'
import Card from './Card'
import image from '../../images/1.jpg'

const BasketPage = () => {
    return (
        <div className="container">
            <h3>Корзина</h3>
            <Card image={image} />
        </div>
    )
}

export default BasketPage