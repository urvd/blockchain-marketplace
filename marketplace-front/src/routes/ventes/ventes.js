import './ventes.css';
import '../../components/css/common.css';
import React from "react";
import {MenuTitle, DatasBiensImmoMock, MenuFunc} from '../../model/config';
import { Row, Col } from 'react-bootstrap';
import {BienImmoListVentes} from '../../components/list-immob/list-immob';

export default class Ventes extends React.Component {
    constructor(){
        super();
        this.state = {
            dataSample:DatasBiensImmoMock()
        }
    }

    render() {  
        const title = MenuTitle.VENTES;
        return (
            <Row className="app-body">
                <Col>
                    <Row>
                        <Col>
                            <h1>{title}</h1>
                        </Col>
                    </Row>
                    <Col className="home-body">
                            *--liste de contenu--*             
                            <BienImmoListVentes action={MenuFunc.VENTES}  have_image={true} immobArray={this.state.dataSample} />
                    </Col>
                
                    *--pagination--*
                </Col>
            </Row>
        );
    }
}

