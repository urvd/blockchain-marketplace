import React from 'react';
import {Link} from 'react-router-dom';
import './menu.css';

function Menubar(){
    return(
      <div>
          <nav>
            <Link to= 'home'>
              <li>HOME</li>
            </Link>
            <Link to='achats'>
              <li>ACHATS</li>
            </Link>
            <Link to='ventes'>
              <li>VENTES</li>
            </Link>
          </nav>
      </div>
    );
}
export default Menubar;