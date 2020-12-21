import './home.css';
import MenuTitle from '../../model/config';
import React from "react"
import { ListGroup, Row, Col} from 'react-bootstrap';
import BiensImobiliers from '../../components/biens-immo/biens-immo'

export default class Home extends React.Component {
   

    render() {
        const title = MenuTitle.HOME;
        // const array_numbers = [1,2,3,4,5,6,7,8];
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
                        <BienImmoList have_image={true} immobArray={datasBiensImmoMock()}/>
                    </Col>
                
                    *--pagination--*
                </Col>
            </Row>
            
        );
    }
}

function BienImmoList(props) {
    // const numbers = props.numbers;
    // const listItems = numbers.map((number) =>
    //   <ListGroup.Item>{number}</ListGroup.Item>
    // );
    const listBienImmoItems = props.immobArray.map((immoBien) =>
        <Row key={immoBien.nom} className="immo">
            <BiensImobiliers have_image={props.have_image} immob = {immoBien}/>
        </Row>
       
    );
    return (
        <ul>
            {listBienImmoItems}
        </ul>
        
    );
}

function datasBiensImmoMock(){
    return [
        {
            nom: "Bord de plage",
            prix: 12,
            adresse: '126, Avenu Promenade des anglais, 71020 Nice, France',
            detail: 'Maison de bord de blabla Dum haec in oriente aguntur, Arelate hiemem agens Constantius \
            post theatralis ludos atque circenses ambitioso editos apparatu diem sextum idus Octobres, qui imperii \
            <eius annum tricensimum terminabat, insolentiae pondera gravius librans, siquid dubium deferebatur \
            aut falsum, pro liquido accipiens et conperto, inter alia excarnificatum Gerontium Magnentianae \
            comitem partis exulari maerore multavit.',
            vendeur: 'amon'
        },
        {
            nom: "Antanapolis",
            prix: 15,
            adresse: null,
            detail: 'Se situe sur une montagne au dessus d\'ancienne ruine de l\'anfithéatre grec. Du balcon \
            on a une vu sur toute la ville, et des vestige du passé.',
            vendeur: 'iscouk'
        },
        {
            nom: "East-Hamptons",
            prix: 21,
            adresse: '5627 exotic Hill Hamptons, NY 11706',
            detail: null,
            vendeur: 'chupa'
        },
    ];
}