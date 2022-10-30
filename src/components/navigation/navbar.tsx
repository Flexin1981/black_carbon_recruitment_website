import React from 'react'
import './navbar.css'
import {Logo} from "../logo/logo";

export function Navbar() {

    return (
      <div className={'navigation'}>
          <Logo/>
          <nav className={'navbar'}>
              <p>HOME</p>
              <p>HOME</p>
          </nav>
      </div>
    );

};