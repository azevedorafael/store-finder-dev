import React, { Component } from 'react';

class Order extends Component {
    constructor() {
        super();
        this.renderOrder = this.renderOrder.bind(this);
    }
    renderOrder(key) {
        const product = this.props.products[key];
        const count = this.props.order[key];

        if (!product || product.status === 'unavailable') {
            return <li key={key}>{product ? product.name : 'product'}Product is no longer available!</li>
        }
        return (
            <li key={key}>
                <span>{count} x {product.name}</span>
                <span className="price">{count * product.price}</span>
            </li>
        )
    }

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const product = this.props.products[key];
            const count = this.props.order[key];
            const isAvailable = product && product.status === 'available';
            if (isAvailable) {
                return prevTotal + (count * product.price || 0)
            }
            return prevTotal;
        }, 0);
        return (
            <div >
                <h1>Your Order</h1>
                <h2> Check the total price 💰 </h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                    <li className="order-total" >
                        <strong>Total:$ </strong>
                        {total}
                    </li>
                </ul>
            </div>
        )
    }
}

export default Order;