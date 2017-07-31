import React from 'react';

//Stateless Functional Component
const Header = (props) => {
    return (
        <header>
            <h1>Store Finder</h1>
            <h2 className="tagline">{props.tagline}</h2>
        </header>
    )
}

export default Header;