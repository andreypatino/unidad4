import React from 'react';
//lib

import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// assets
import slider from '../../assets/landing/slide3.jpg'
//styles import './style'

function Slider(){
    return (
        
        <div>
            <Col>
                <Row className="justify-content-md-center">
                    <Col xs lg="6" style={{position:'absolute', marginTop:'10%'}}>
                        <h1 style={{color:'white'}}>Encontraras las mejores ofertas de Automoviles</h1>
                        <Button variant="success">Buscar</Button>
                    </Col>
                </Row>
                <img src={slider} alt="" style={{ width: '100%' }} />
                 
            </Col>
        </div>
    );
}
export default Slider;