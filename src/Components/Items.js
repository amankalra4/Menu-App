import React from 'react';
import './Items.css';

const Items = (props) => {
    // let style = {
    //     backgroundColor: 'yellow', 
    //     color: '#2f2929', 
    //     width: '55%', 
    //     textAlign: 'center',
    //     margin: '0 30px',
    //     borderRadius: '7px',
    //     fontSize: '20px',
    //     fontFamily: 'sans-serif',
    //     padding: '5px 0px'
    // }

    let snacksDiv = null, mainCourse = null;

    snacksDiv = (
        <React.Fragment>
            <div>
                {/* <p className = 'heading' style = {style}>STARTERS</p> */}
                <p className = 'heading'>STARTERS</p>
                    <div className="row">
                        <div className="column">
                            <ul className = 'items-list'>
                                <li>Fried Oyesters</li>
                                <li>Chicken Wings</li>
                                <li>Mushrooms</li>
                                <li>Garlic Bread</li>
                                <li>Kebab</li>
                            </ul>
                        </div>
                        <div className="column">
                            <ul className = 'price-list'>
                                <li>&#8377; 250</li>
                                <li>&#8377; 150</li>
                                <li>&#8377; 120</li>
                                <li>&#8377; 180</li>
                                <li>&#8377; 200</li>
                            </ul>
                        </div>
                    </div>
                </div>
            <div>
                <p className = 'heading'>SANDWICHES</p>
                    <div className="row">
                        <div className="column">
                            <ul className = 'items-list'>
                                <li>Cheese Sandwich</li>
                                <li>Chutney Sandwich</li>
                                <li>Veg Sandwich</li>
                                <li>Plain Sandwich</li>
                                <li>Corn Cheese Toast</li>
                            </ul>
                        </div>
                        <div className="column">
                            <ul className = 'price-list'>
                                <li>&#8377; 160</li>
                                <li>&#8377; 100</li>
                                <li>&#8377; 180</li>
                                <li>&#8377; 200</li>
                                <li>&#8377; 150</li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div>
                <p className = 'heading'>PASTA</p>
                    <div className="row">
                        <div className="column">
                            <ul className = 'items-list'>
                                <li>Four Cheese Pasta</li>
                                <li>Pasta Carbonara</li>
                                <li>Whole Wheat Pasta</li>
                                <li>Gnocchi Pasta</li>
                                <li>Chicken Pasta</li>
                            </ul>
                        </div>
                        <div className="column">
                            <ul className = 'price-list'>
                                <li>&#8377; 250</li>
                                <li>&#8377; 270</li>
                                <li>&#8377; 190</li>
                                <li>&#8377; 210</li>
                                <li>&#8377; 290</li>
                            </ul>
                        </div>
            </div>        </div>
        </React.Fragment>
    );

    mainCourse = (
        <React.Fragment>
            <div>
                <p className = 'heading'>Dal</p>
                    <div className="row">
                        <div className="column">
                            <ul className = 'items-list'>
                                <li>Dal Tadka</li>
                                <li>Dal Makhni</li>
                                <li>Dal Plain</li>
                            </ul>
                        </div>
                        <div className="column">
                            <ul className = 'price-list'>
                                <li>&#8377; 120</li>
                                <li>&#8377; 150</li>
                                <li>&#8377; 100</li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div>
                <p className = 'heading'>Punjabi</p>
                    <div className="row">
                        <div className="column">
                            <ul className = 'items-list'>
                                <li>Paneer Bhurji</li>
                                <li>Paneer Butter Masala</li>
                                <li>Palak Paneer</li>
                                <li>Mix veg Curry</li>
                                <li>Methi Garlic</li>
                            </ul>
                        </div>
                        <div className="column">
                            <ul className = 'price-list'>
                                <li>&#8377; 210</li>
                                <li>&#8377; 200</li>
                                <li>&#8377; 190</li>
                                <li>&#8377; 200</li>
                                <li>&#8377; 180</li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div>
                <p className = 'heading'>Biryani</p>
                    <div className="row">
                        <div className="column">
                            <ul className = 'items-list'>
                                <li>Chicken Biryani</li>
                                <li>Mutton Biryani</li>
                                <li>Veg Biryani</li>
                                <li>Veg Family Pack Biryani</li>
                                <li>Egg Biryani</li>
                            </ul>
                        </div>
                        <div className="column">
                            <ul className = 'price-list'>
                                <li>&#8377; 210</li>
                                <li>&#8377; 250</li>
                                <li>&#8377; 150</li>
                                <li>&#8377; 280</li>
                                <li>&#8377; 150</li>
                            </ul>
                        </div>
                    </div>
            </div>
        </React.Fragment>
    );

    return (
        <div style = {{margin: '5px 10px'}}>
            {props.items === 'snacks' ? snacksDiv : mainCourse}
        </div>
    );
}

export default Items;