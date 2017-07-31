import React, { Component } from 'react';

class Product extends Component {
    render() {
        const { details, index } = this.props;
        const isAvailable = details.status === 'available';
        const buttonText = isAvailable ? 'Add To Order' : 'Sold Out';
        return (
            <li className="product">
                <img className="product-img" src={this.props.details.image} alt={this.props.details.name} />
                <h4 className="product-name">
                    {details.name}
                </h4>
                <span className="product-price">{`Price:$ ${details.price}`}</span>
                <p>{details.desc}</p>
                <button
                    onClick={() => this.props.addToOrder(index)}
                    disabled={!isAvailable}>{buttonText}</button>
            </li>
        )
    }
}

export default Product;