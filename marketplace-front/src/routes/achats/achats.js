import React from 'react'
import './achats.css'
import './../../css/main-body.css'
import {MenuTitle} from './../../models/consts'


function AchatsImmob() {
    const menuTitle = MenuTitle.AchatMenu
    return (
      <div className="main-body">
        <h2>{menuTitle}</h2>
      </div>
    );
}

export default AchatsImmob