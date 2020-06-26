import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createProduct } from '../../redux/actions'
import { Alert } from '../Alert'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: Date.now().toString(),
            name: '',
            description: '',
            price: null
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(e)
        this.props.createProduct(this.state)
        this.setState({
            name: '',
            description: '',
            price: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Описание товара</h3>
                {this.props.showAlert && <Alert text={this.props.showAlert} />}
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Название</label>
                    <input
                        className="form-control"
                        name="name"
                        type="test"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Стоимость</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">₸</span>
                        </div>
                        <input
                            type="number"
                            name="price"
                            className="form-control"
                            value={this.state.price}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Описание</label>
                    <textarea
                        className="form-control"
                        name="description"
                        onChange={this.handleChange}
                        value={this.state.description}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Добавить</button>
            </form>
        )
    }
}
const mapStateToProps = state => ({
    showAlert: state.products.addAlert
})
const mapDispatchToProps = {
    createProduct
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)