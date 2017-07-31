import React, { Component } from 'react';

class AddProductsForm extends Component {
    createProduct(event) {
        event.preventDefault();
        const product = {
            name: this.name.value,
            price: this.price.value,
            status: this.status.value,
            desc: this.desc.value,
            image: this.image.value,
        }
        this.props.addProduct(product);
        this.productForm.reset();
    }

    render() {
        return (
            <form className="form-grid" ref={(input) => this.productForm = input} onSubmit={(e) => this.createProduct(e)}>
                <input className="item name" ref={(input) => this.name = input} type="text" placeholder="Produt Name" />
                <input className="item price" ref={(input) => this.price = input} type="text" placeholder="Produt Price" />
                <select className="item status" ref={(input) => this.status = input}>
                    <option value="available">New</option>
                    <option value="unavailable">Old</option>
                </select>
                <textarea className="item description" ref={(input) => this.desc = input} placeholder="Product Desc"></textarea>
                <input className="item img" ref={(input) => this.image = input} type="text" placeholder="Product Image" />
                <button className="item bt btns" type="submit"> + Add Item</button>
            </form>
        )
    }
}

export default AddProductsForm;