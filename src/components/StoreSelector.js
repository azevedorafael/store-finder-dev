import React, { Component } from 'react';

class StoreSelector extends Component {
    constructor() {
        super();
        this.state = {
            tagline: ""
        };
    }

    goToStore(event) {
        event.preventDefault();
        //first grab the text from the box
        const storeId = this.storeInput.value;
        this.setState.tagline = storeId;
        //second we're going to transition from / to /store/:storeId
        console.log(this.storeInput.value);
        this.context.router.transitionTo(`/store/${storeId}`);

    }

    render() {
        return (
            <form className="selector" onSubmit={this.goToStore.bind(this)}>
                <h1>Stores Finder</h1>
                <h3>Find the store desired!</h3>
                <input type="text" required placeholder="Type name here"
                    ref={(input) => { this.storeInput = input }} />
                <button className="btns" type="submit">Search 🔍</button>
            </form>
        )
    }
}

StoreSelector.contextTypes = {
    router: React.PropTypes.object
}

export default StoreSelector;

