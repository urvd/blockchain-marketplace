import './home.css';
import '../../components/css/common.css';
import {MenuTitle, MenuFunc, DatasBiensImmoMock} from '../../model/config';
import React from "react";
import { ListGroup, Row, Col} from 'react-bootstrap';
import {BienImmoListHome} from '../../components/list-immob/list-immob';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            dataSample: DatasBiensImmoMock()
        }
    }

    render() {
        const title = MenuTitle.HOME;

        return (
            <Row className="app-body">
                <Col>
                    <Row>
                        <Col>
                            <h1>{title}</h1>
                        </Col>
                    </Row>
                    
                    *--filtre/recherche--* par (default) date + par users
                    <Col className="home-body">
                            *--liste de contenu--*             
                            <BienImmoListHome action={MenuFunc.HOME}  have_image={true} immobArray={this.state.dataSample} />
                    </Col>
                
                    *--pagination--*
                </Col>
            </Row>
            
        );
    }
}

