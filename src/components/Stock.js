import React, { Component } from 'react';
import AddProductsForm from "./AddProductsForm";

class Stock extends Component {
    render() {
        return (
            <div className="container-box">
                <h1>Stock</h1>
                <h2>Add new or load itens here </h2>
                <AddProductsForm addProduct={this.props.addProduct} />
                <button className="btn-load" onClick={this.props.loadSamples}>Load Products</button>
            </div>
        )
    }
}

export default Stock;