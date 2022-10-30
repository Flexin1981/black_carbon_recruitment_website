import React from 'react';
import './App.css';

import SolidButton from "./components/buttons/solid_button";
import HollowButton from "./components/buttons/hollow_button";
import { Logo } from "./components/logo/logo";
import {Navbar} from "./components/navigation/navbar";

function App() {
  return (
      <div className={'center'}>
          <div className={'center'}>
              <Logo/>
              <Navbar/>
          </div>

          <div className={'center hero-text'}>
            <h1>BUSINESS IS ABOUT RELATIONSHIPS</h1>
            <p>
                We know that before the skills of employees can be unleashed that the person must fit with the values of your organisation, they must fit with your exsisting teams.
            </p>
            <p>
                This is why finding the right employees has to change from the norm of sifiting though C.V’s and interviewing candidate after candidate.
            </p>
            <p>
                We use a combination of technology and recruitment expertise to buld relationships with clients candiates and vendors to place the right people in the right place.
            </p>
          </div>

          <div className={'center buttons-sections'}>
              <SolidButton text='CONTACT US'/>
              <HollowButton text={'SERVICES'}/>
          </div>


          <div className={'fade-background'}>


          </div>

      </div>
  );
}

export default App;
