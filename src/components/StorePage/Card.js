import React from 'react'
import { connect } from 'react-redux'
import { addInBasket } from '../../redux/actions'
import { Alert } from '../Alert'

const Card = ({ image, products, addInBasket, showAlert }) => {

    return (
        <div>
            {showAlert && <Alert text={showAlert} />}
            <div className="row">
                {
                    products.map(item =>
                        <div className="col-sm" key={item.id}>
                            <div className="card" id={item.id}>
                                <img className="card-img-top" src={image} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <p className="card-text">Стоимость: {item.price}тг</p>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => { addInBasket(item) }}
                                    >
                                        В корзину
                                </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    products: state.products.products,
    showAlert: state.products.addAlert
})
const mapDispatchToProps = {
    addInBasket
}
export default connect(mapStateToProps, mapDispatchToProps)(Card)
