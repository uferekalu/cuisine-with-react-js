import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './Delivery.css';

class Delivery extends Component {
    constructor(props) {
        super(props);
        
        const items = [
            {
                cName: 'fa fa-thumbs-up fa-2x',
                text: 'We are dedicated to deliver the best products'
            },
            {
                cName: 'fa fa-clock-o fa-2x',
                text: 'Constant Online support 16hrs a day'
            },
            {
                cName: 'fa fa-motorcycle fa-2x',
                text: 'Quick and Reliable Delivery within Lagos'
            }
        ]
        this.state = {
            details: items
        };
    }
    
    render() {
        return (
            <section className="black-box mt-5">
                <Container>
                    <Row className="mx-auto align-items-center">
                        {this.state.details.map((item, index) => {
                            return (
                                    <Col xs={12} md={4} row mx-auto delivery-col key={index} >
                                        <Col xs={1} className="row align-items-center mx-3">
                                            <i className={item.cName}></i>
                                        </Col>
                                        <Col xs={8} className="black-box-text align-items-center justify-content-center">
                                            {item.text}
                                        </Col>
                                    </Col>
                            )
                        })}
                    </Row>
                    
                </Container>

            </section>
        );
    }
}

export default Delivery;