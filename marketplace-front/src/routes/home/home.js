import React from 'react'
import './home.css'
import './../../css/main-body.css'
import {MenuTitle} from './../../models/consts'

function Home() {
    const menuTitle = MenuTitle.SearchMenu
    console.log(window.location.href)
    return (
      <div className="main-body">
        <h2>{menuTitle}</h2>
        
      </div>
    );
}

export default Home