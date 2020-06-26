import React from 'react'
import { connect } from 'react-redux'
import { deleteInBasket } from '../../redux/actions'
import { Alert } from '../Alert'

const Card = ({ image, basket, deleteInBasket, showAlert }) => {

    if (!basket.length) {
        return (
            <small>Простите, но похоже в корзине ничего нет.</small>
        )
    }

    return (
        <div>
            {showAlert && <Alert text={showAlert} />}
            <div className="row">
                {
                    basket.map(item =>
                        <div className="col-sm" key={item.id}>
                            <div className="card" id={item.id}>
                                <img className="card-img-top" src={image} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <p className="card-text">Стоимость: {item.price}тг</p>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => { deleteInBasket(item) }}
                                    >
                                        Убрать из Корзины
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
    basket: state.basket.purchase,
    showAlert: state.products.addAlert
})
const mapDispatchToProps = {
    deleteInBasket
}
export default connect(mapStateToProps, mapDispatchToProps)(Card)