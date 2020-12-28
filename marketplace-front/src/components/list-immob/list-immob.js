import React from "react";
import {MenuFunc, DatasBiensImmoMock, MenuTitle} from '../../model/config';
import '../../components/css/common.css';
import { Row, Col } from 'react-bootstrap';
import BiensImobiliers from '../biens-immo/biens-immo';
import { Button } from 'react-bootstrap';
import {BsFillTrashFill, BsPencilSquare, BsPlusCircle} from 'react-icons/bs';


// export class BienImmoList extends React.Component {
//     constructor(props) {
//         super(props)
//         this.getAction = this.getAction.bind(this)
//     }
//     getAction(){
//         return this.props.action;
//     }

//     render() {
//         let bienImmoListComponent = (<></>);
//         const dataSample = DatasBiensImmoMock();
//         // if (this.props.action === MenuFunc.HOME) {
//              bienImmoListComponent = (<BienImmoListHome action={MenuTitle.HOME}  have_image={true} immobArray={this.props.immobArray} />);
//         // } else if (this.props.action === MenuFunc.VENTES) {
//         //     bienImmoListComponent = (<BienImmoListVentes action={MenuTitle.VENTES} have_image={true} immobArray={dataSample} />);
//         // } else if (this.props.action === MenuFunc.ACHATS_.Panier) {
//         //     bienImmoListComponent = (<BienImmoListAchats action={MenuFunc.ACHATS_.Panier} have_image={false} immobArray={dataSample} />);
//         // }

//         return (
//             // {this.getAction === MenuFunc.HOME? <BienImmoListHome action={MenuTitle.HOME}  have_image={true} immobArray={dataSample} />
//             // :{this.props.action === MenuFunc.VENTES?<BienImmoListVentes action={MenuTitle.VENTES} have_image={true} immobArray={dataSample} />
//             //     :<BienImmoListAchats action={MenuFunc.ACHATS_.Panier} have_image={false} immobArray={dataSample} />
//             //     }
//             // }
//             {bienImmoListComponent}
//         );
//     }
// }


export function BienImmoListHome(props) {

    const listBienImmoItems = props.immobArray.filter(immo => immo.achat_status !== 'Acheter' ).map((immoBien) =>
         <Row key={immoBien.nom} className="immob">
            <BiensImobiliers action={props.action} have_image={props.have_image} immob = {immoBien}/>
        </Row>
   
    );
    return (
        <ul>
            {listBienImmoItems}
        </ul>
    );
}

export function BienImmoListAchats(props){ //filtre par state en cours 

        const immobReduit = props.immobArray
        .filter(immo => immo.achat_status === "Encours" && immo.acheteur === "chupa")
        .lenght !== 0

        if(immobReduit) {
            const listBienImmoItems =  props.immobArray
            .filter(immo => immo.achat_status === "Encours" && immo.acheteur === "chupa" )
            .map((immoBien) =>
                <Col>
                    <BiensImobiliers action={props.action} have_image={props.have_image} immob={immoBien}/>
                </Col>
            );
            return (
                <ul className="immo">
                    {listBienImmoItems}
                </ul>
            );
        } else {
            if(props.action === MenuFunc.ACHATS_.panier) {
                return <Row><h3>Panier vide.</h3></Row>
            }else{
                return <Row><h3>Contenu du panier est vide !! .</h3></Row>
            }
           
        }

}
export function BienImmoListAchatsArchiver(props){ //filtre par state en cours 


        const immobReduit = props.immobArray
        .filter(immo => immo.achat_status === "Acheter" && immo.acheteur === "chupa")
        .lenght > 0;
        const listBienImmoItems = props.immobArray
        //.filter(immo => this.props.action === MenuFunc.ACHATS_Archive && immo.achat_status === "Acheter" && immo.acheteur === "chupa")
        .map((immoBien) =>
            <Col>
                <BiensImobiliers action={props.action} have_image={props.have_image} immob={immoBien}/>
            </Col>
        );
        if(immobReduit) {
            return (
                <Col className="immo">
                    {listBienImmoItems}
                </Col>
            );
        } else {
            return <Col><h3>Historique des commande est vide !!</h3></Col>
        }

}

export function BienImmoListVentes(props) {
    //mapper, filtrer pout le vendeur == current user 
    const listBienImmoItems = props.immobArray.filter(immo => immo.vendeur === 'amon' ).map((immoBien) =>

        <Row>
            <Row className="immo">
                <Col xs={12} md={4}>
                    <Row className="icons-alt">
                        <Button variant="sucess">
                            <h2><BsFillTrashFill/></h2>
                        </Button>
                    </Row>
                    <Row className="icons-alt">
                        <Button variant="sucess">
                            <h2><BsPencilSquare/></h2>
                        </Button>
                    </Row>
                </Col>
                <Col key={immoBien.nom} xs={2} md={2} >
                    <BiensImobiliers have_image={props.have_image} immob = {immoBien}/>
                </Col>
            </Row>
        </Row>
    );
    return (
        <Col>
            <Row className="icons-plus">
                <Button variant="sucess"><h1><BsPlusCircle/></h1></Button>
            </Row>
            {listBienImmoItems}
        </Col>
    );
}