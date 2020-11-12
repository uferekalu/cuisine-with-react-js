import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './Popular.css';

class Popular extends Component {
    constructor(props) {
        super(props);
        const items = [
            {
                discountTag: '-40%',
                product: 'OKRA',
                url: '#',
                src: '/assets/images/okro.jpg',
                cName: "discount-tag"
            },
            {
                discountTag: '',
                product: 'BEANS',
                url: '#',
                src: '/assets/images/beans.jpg',
                cName: "discount-no-tag"
            },
            {
                discountTag: '-40%',
                product: 'ONION',
                url: '#',
                src: '/assets/images/onion.jpg',
                cName: "discount-tag"
            },
            {
                discountTag: '',
                product: 'PEPPER',
                url: '#',
                src: '/assets/images/pepper.jpg',
                cName: "discount-no-tag"
            }
        ]
        this.state = {
                title: 'POPULAR',
                details: items
            };
           
                
    }
    
    render() {
        return (
            <Container className="overflow-hidden">
                <h5>{this.state.title} <i class='fas fa-angle-right'></i></h5>
                <Row>
                   {this.state.details.map((item, index) => {
                       return (
                            <Col xs={6} sm={3} className="food-item hover-appearance" key={index}>
                                <a href="#">
                                    <div className={item.cName}>
                                        <p>{item.discountTag}</p>
                                    </div>
                                    <img src={`${item.src}`} className="inline-photo" />
                                    <p className="food-label">{item.product}</p>
                                </a>
                                <div className="projects__btns align-middle">
                                    <a href="#" className="projects__btn">
                                    <i class="fas fa-eye"></i> {item.product}
                                    </a>
                                </div>
                            </Col>
                       )
                   })}
                </Row>
            </Container>
        );
    }
}

export default Popular;