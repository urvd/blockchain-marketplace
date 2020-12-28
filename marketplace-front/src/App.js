import logo from './logo.svg';
import './App.css';
import './components/css/common.css';
import {Suspense} from "react";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import {MenuFunc} from './model/config'
import MyHeader from './components/header/header';
import MyFooter from './components/footer/footer';
import Home from './routes/home/home';
import Achats from './routes/achats/achats';
import Ventes from './routes/ventes/ventes';


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Chargement...</div>}>
        <Switch>
          <Container fluid className="app" >
            <Row >
              <Col>
                <MyHeader/>
                  <Container fluid="xl">

                    <Route exact path="/" component={Tmp} />    
                    <Route path="/achats"> 
                      <Achats tab={MenuFunc.ACHATS_Panier} />   
                    </Route>  
                    <Route path="/ventes" component={Ventes} />
                    <Route path="/home" component={Home} />  
                    <Route exact path="/achats?tab=panier">    
                      <Achats tab={MenuFunc.ACHATS_Panier} />   
                    </Route>  
                    <Route exact path="/achats?tab=histo">    
                      <Achats tab={MenuFunc.ACHATS_Archive} />   
                    </Route>  
                  </Container>
                <MyFooter/>
              </Col>
            </Row>

          </Container>
        </Switch>
      </Suspense>
    </Router>

  );
}

function Tmp() {
  return (
    <div>
       <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>    
  );
}

export default App;
