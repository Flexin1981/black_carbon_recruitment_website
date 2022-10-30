import React from 'react'
import './navbar.css'
import NavigationLink from "./link";

export function Navbar() {
    return (
      <nav className={'navbar'}>
          <NavigationLink text={'HOME'} link={"/"}/>
          <NavigationLink text={'ABOUT'} link={"/"}/>
          <NavigationLink text={'SERVICES'} link={"/"}/>
          <NavigationLink text={'CONTACT'} link={"/"}/>
      </nav>
    );

};