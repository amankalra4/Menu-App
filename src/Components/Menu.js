import React, { useState } from 'react';
import './Menu.css'

import snacks_menu from '../Images/snacks_menu.jpg';
import main_course from '../Images/menu2.jpg';
import Content from './Content';

const Menu = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    let imgDiv = null, showButton = null, menu = null;

    if(click) {
        imgDiv = <img src = {main_course} className = 'img' alt = 'Main course'/>;
        showButton = <button
                            style = {{
                                backgroundColor: '#f1f1f1',
                                color: 'black',
                                position: 'absolute',
                                top: '50%',
                                left: '5px'
                            }}
                            onClick = {handleClick}>&#8249;</button>;
        menu = 'mainCourse';
    }

    else {
        imgDiv = <img src = {snacks_menu} className = 'img' alt = 'Snacks Menu'/>
        showButton = <button
                            style = {{
                                backgroundColor: '#212221',
                                color: 'white',
                                position: 'absolute',
                                top: '50%',
                                right: '5px'
                            }}
                            onClick = {handleClick}>&#8250;</button>;
        menu = 'snacks';
    }

    return (
        <div>
            {imgDiv}
            <div className = 'contentDiv'>
                <Content menu = {menu} />
                {showButton}
                <p style = {{
                                position: 'fixed', 
                                bottom: '0', 
                                fontSize: '15px', 
                                margin: '5px 10px',
                                color: 'wheat'
                            }}>
                    <b>&#169;Chef: Rudraksh Sirohi (16BHM162). All rights reserved.</b>
                </p>
        </div>
        </div>
    );
}

export default Menu;