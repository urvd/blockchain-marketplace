import './ventes.css';
import MenuTitle from '../../model/config';
import { Container, Row, Col } from 'react-bootstrap';

export default function Ventes(){
    const title = MenuTitle.VENTES;

    return (
        <Col>
            <h1>{title}</h1>
        </Col>
    );
}