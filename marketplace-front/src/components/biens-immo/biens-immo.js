import './biens-immo.css';
import React from "react";
import {useState} from "react";
import ReactDOM, { render } from "react-dom"
import MenuTitle from '../../model/config';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Button  from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import logo from "../../logo.svg";
import ImageSlider from './images-slider/images-slider';

class BiensImobiliers extends React.Component {

    constructor(props){ 
        super(props);
    }

    render() {
        const Nada = 'N/A';
        
        return (
            <Card style={{ width: '800px' }}>
                {/* champs d image ou non  */}
                <ImagesBienImmob have_image={this.props.have_image} />
                {/* champs d identité  */}
                <Card.Body>
                    <Card.Title>{this.props.immob.nom}</Card.Title>
                    <Container>
                        <Row>
                            <Col xs={12} md={8}>
                                <Row> 
                                    <Col>
                                        <Card.Subtitle>Vendeur: {this.props.immob.vendeur}</Card.Subtitle><br/>
                                    </Col> 
                                </Row>
                                <Row>
                                    <Col>
                                        <Card.Subtitle>Adresse: {this.props.immob.adresse!=null?this.props.immob.adresse:Nada}</Card.Subtitle>
                                    </Col>                                   
                                </Row>
                            </Col>
                            <Col xs={6} md={4}>
                                <Card.Subtitle>Prix: {this.props.immob.prix} ETH</Card.Subtitle>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
                <Card.Body className="immo-detail">
                    <DetailBienImmo  detail={this.props.immob.detail != null?this.props.immob.detail:Nada} />
                </Card.Body>
                 {/* champs d ajout au pannier */}
                <Card.Body>
                    <Button variant="waning">Ajouter au panier</Button>
                </Card.Body>
            </Card>
        );
    }
}

function ImagesBienImmob(props){
    if (props.have_image) {
        // return (<Card.Img className="immo-img" variant="top" src={logo} />)
        return (
            <Card.Header variant="top">
                <ImageSlider className="immo-img"/>
            </Card.Header>
        )
        //param: arrayOfImages
    } else {
        return(<Card.Header variant="top"></Card.Header>);
    }
}

class DetailBienImmo extends React.Component {

    constructor(props){
        super(props)
        this.state = {open: false}
        this.collapse = this.collapse.bind(this);
    }
    collapse(){
        console.log('before: '+this.state.open);
        this.setState(state => ({
            open: !state.open
        }));
        console.log('after: '+this.state.open);
    }
    
    render() {

        return (
            <div>
                <Button
                    variant="link"
                    onClick={this.collapse}
                >
                {this.state.open?'Fermer':'Voir'} les Details
                </Button>
                <div style={ this.state.open?{display: 'block'}:{display: 'none'}}>
                    {this.props.detail}
                </div>
                {/* <collapse open={this.state.open} detail={this.props.detail}/> */}
            </div>
          );
    }
    
  }

  export default BiensImobiliers;