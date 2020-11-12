import React, { Component } from 'react';
import './Categories.css';
import { CatItems } from './CategoryItems.js';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: CatItems
        };
    }
    
    render() {
        return (
                <Container className="overflow-hidden">
                    <h5 className="section-header category-caption">CATEGORIES <i className="fas fa-angle-right"></i></h5>
                    {this.state.items.map((item, index) => {
                        return (
                            <a href={item.url} className={item.cName} key={index}>
                                <Row className={item.cName1}>
                                    <Col xs={8} className={item.cName2}>
                                        <h1 className={item.cName3}>{item.catType}</h1>
                                        <h5 className={item.cName4}>{item.catType}</h5>
                                    </Col>
                                    <Col xs={2}>
                                        <img src={`${item.src}`} className={item.cName5} alt="" />
                                    </Col>
                                    <Col xs={2}>
                                        <img src={`${item.src1}`} className={item.cName5} alt="" />
                                    </Col>
                                </Row>
                            </a>
                        )
                    })}
                </Container>
        );
    }
}

export default Categories;