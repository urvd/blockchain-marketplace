import './achats.css';
import MenuTitle from '../../model/config';
import { Container, Row, Col } from 'react-bootstrap';

export default function Achats(){
    const title = MenuTitle.ACHATS;

    return (
        <Col>
            <h1>{title}</h1>
        </Col>
    );
}