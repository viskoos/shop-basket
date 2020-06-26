import React from 'react'
import image from '../../images/1.jpg'
import Card from './Card'

const StorePage = () => {
    return (
        <div className="container">
            <div>
                <h3>Товары</h3>
                <Card image={image} />
            </div>
        </div>
    )
}

export default StorePage