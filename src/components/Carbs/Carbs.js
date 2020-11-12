import React, { Component } from 'react';
import './Carbs.css';


class CarbsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
                title: "30% OFF CARBS",
                text: "Save up on a chunk when you buy Carbs, upwards of 10k. Use promo code YAMARITA at checkout.",
                btn: "Shop Now",
                cName: "shopBtn",
                cName1: "promo-banner"
        };
    }
    
    render() {
        return (
            <section className={this.state.cName1}>
                <h2>{this.state.title}</h2>
                <p>{this.state.text}</p>
                <a href="#" className={this.state.cName}>{this.state.btn}</a>
            </section>
        );
    }
}

export default CarbsComponent;