import './home.css';
import '../../components/css/common.css';
import {MenuTitle, MenuFunc, DatasBiensImmoMock} from '../../model/config';
import React from "react";
import { ListGroup, Row, Col} from 'react-bootstrap';
import {BienImmoListHome} from '../../components/list-immob/list-immob';
//import {enableWeb3, accountsGet} from '../../web3-sc';
const BienImmoABI = require('../../model/bien-immo-abi.json');
const Web3 = require('web3');
export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            dataSample: DatasBiensImmoMock()
        }
    }
    // async componentWillUnmount(){
    //     this.loadWeb3();
    //     await this.accountsGet();
    // }

    // async accountsGet(){
    //     const accounts = await window.web3.eth.getAccounts();
    //     alert("#Home >bc: accounts "+ accounts[0])
    //     return accounts[0];
    // }

    // loadWeb3(){
    //     if (window.web3) {
    //         window.web3 = new Web3(window.web3.currentProvider);
    //         window.ethereum.enable();
    //     }
    //     // else{
    //     //     window.web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
    //     //     window.ethereum.enable();
    //     // }
    // }

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

