import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Stock from './Stock';
import Product from './Product';
import sampleProducts from '../sample-products';

class App extends Component {
    constructor() {
        super();
        this.addProduct = this.addProduct.bind(this);
        this.loadSamples = this.loadSamples.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
        //get initial state
        this.state = {
            products: {},
            order: {}
        };
    }

    //Invoked once , on the client and server, before the <App> renders
    componentWillMont() {
        //check if there is any order in localstorage
        const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

        if (localStorageRef) {
            //update our App caomponent's order state
            this.setState({
                order: JSON.parse(localStorageRef)
            });
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem(`order-${this.props.params.storeId}`,
            JSON.stringify(nextState.order));
    }

    addProduct(product) {
        //update state
        const products = { ...this.state.products };//spread operator
        //add in new product
        const timestamp = Date.now();
        products[`product-${timestamp}`] = product;
        //set state controls the state of the product, whenever the state is updated all the instances of product are update
        this.setState({ products });
    }

    loadSamples() {
        this.setState({ products: sampleProducts });
    }

    addToOrder(key) {
        //Copy the current state
        const order = { ...this.state.order };
        //Update or add the new number
        order[key] = order[key] + 1 || 1;
        //Update state
        this.setState({ order });
    }

    render() {
        return (
            <div className="container" >
                <div className="main">
                    <Header tagline="Find Products Here" />
                    <ul className="products-grid">
                        {
                            Object
                                .keys(this.state.products)
                                .map(key => <Product key={key}
                                    index={key}
                                    details={this.state.products[key]}
                                    addToOrder={this.addToOrder} />)
                        }
                    </ul>
                </div>
                <Order className="order" products={this.state.products} order={this.state.order} />
                <Stock addProduct={this.addProduct} loadSamples={this.loadSamples} />
            </div>
        )
    }
}

export default App;