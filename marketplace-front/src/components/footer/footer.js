import './footer.css';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function MyFooter(){
    return (
        <Row className="app-footer">
          <Col>
            <h3>Powered by Urvd</h3>
          </Col>
        </Row>
    );
}