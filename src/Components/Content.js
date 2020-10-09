import React from 'react';
import './Content.css';
import Items from './Items';

const Content = (props) => {
    return (
        <div>
            <p className = 'title'>Welcome to Foody Buddy Resturant's Menu</p>
            <Items items = {props.menu} />
        </div>
    );
}

export default Content;