import React from 'react'
import './ventes.css'
import './../../css/main-body.css'
import {MenuTitle} from './../../models/consts'

function VentesImmob() {
    const menuTitle = MenuTitle.VentesMenu

    return (
      <div className="main-body">
        <h2>{menuTitle}</h2>
      </div>
    );
}

export default VentesImmob