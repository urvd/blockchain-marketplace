import React from 'react'
import { Router, Link } from 'react-router-dom'
import './header.css'
import {MenuRoute} from './../../models/consts'

function MyHeader() {
  return (
    <div className="header">  
      <div>
          <h1>Markteplace Immobiliere</h1>
      </div>
      <div>
         <h3>This place enable to buy or sell housses, location places, ...</h3>
      </div>
    </div>
  );
}

export default MyHeader