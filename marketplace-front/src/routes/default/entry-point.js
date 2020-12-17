import React from 'react'
import './entry-point.css'
import './../../css/main-body.css'
import {MenuTitle} from './../../models/consts'


function EntryPoint() {
  const menuTitle = MenuTitle.DEFAULT_MENU_START
    
  return (
    <div className="main-body">
      <h2>{menuTitle}</h2>
    </div>
  );
}

export default EntryPoint