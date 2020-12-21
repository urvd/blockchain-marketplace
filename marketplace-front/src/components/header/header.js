import './header.css';
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function MyHeader(){
    return (
        <Row className="app-header">
          <Col>
            <Row>
              <Col>
              <h1>Marketplace Immo</h1>
              <p>Par ici, venez acheter et/ou vendre un bien immobillier.</p>
              </Col>
            </Row>

            <Row className="menubar">
                <Col className="menu-item" xs lg="2">
                  <Button variant="primary">Info (click popover)</Button>
                </Col>
                <Col className="menu-item" xs lg="2">
                  <Link to="/home">Accueil</Link>
                </Col>
                <Col  className="menu-item"xs lg="2">
                  <Link to="/achats">Achats</Link>
                </Col>
                <Col  className="menu-item" xs lg="2">
                  <Link to="/ventes">Ventes</Link>
                </Col>
                <Col className="menu-item" xs lg="2">
                  <Button variant="danger">Deconnection</Button>
                </Col>
            </Row>
            
          </Col>
        </Row>
         
    );
}