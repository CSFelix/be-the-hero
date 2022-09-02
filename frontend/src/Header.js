import React from 'react';

// JSX (JavaScript XML)
/*function Header(props) {
    return (
        <h1>{props.title}</h1>
    );
}*/

function Header({ children }) {
    return (
        <h1>{ children }</h1>
    );
}

export default Header;