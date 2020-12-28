import './achats.css';
import '../../components/css/common.css';
import React from "react";
import { useState } from "react";
import {MenuTitle, DatasBiensImmoMock, MenuFunc} from '../../model/config';
import { Row, Col, Nav, Tabs, Tab } from 'react-bootstrap';
import { BienImmoListAchats, BienImmoListAchatsArchiver } from '../../components/list-immob/list-immob';
import {BsFillArchiveFill, BsBucket} from 'react-icons/bs'
export default class Achats extends React.Component{
    constructor(props) {
        super(props);
    }
    
    render() {

        const title = MenuTitle.ACHATS;
        return (
            <Row className="app-body">
                <Col>
                    <Row>
                        <h1>{title}</h1>
                    </Row>
                    <Row className="home-body">
                        <AchatsTabs tab={this.props.tab} />           
                    </Row>
                </Col>
            </Row>

        );
    }

}

function AchatsTabs(props) {
    const immobArray = DatasBiensImmoMock();
      
    return (
          <Tab.Container defaultActiveKey={props.tab}>
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="panier"><BsBucket/> Panier</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="histo">< BsFillArchiveFill/> Historique</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={10}>
              <Tab.Content>
                <Tab.Pane eventKey="panier">
                    <BienImmoListAchats action={MenuFunc.ACHATS_Panier}  have_image={false} immobArray={immobArray} />
                </Tab.Pane>
                <Tab.Pane eventKey="histo">
                    <BienImmoListAchatsArchiver action={MenuFunc.ACHATS_Archive}  have_image={false} immobArray={immobArray} />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        );

  }