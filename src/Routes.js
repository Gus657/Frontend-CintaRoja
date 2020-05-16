import React from 'react';
import { Route } from 'react-router-dom';
import Donations from './components/Donations';
import CreateSuscriber from './components/CreateSuscriber';
import CreateDonation from './components/CreateDonation';

export default [
  <React.Fragment key={"Routes"}>
      <Route exact path="/error-list" component={ Donations } ></Route>
      <Route exact path="/error-report" component={ CreateDonation} ></Route>
      <Route exact path="/" component={ Donations} ></Route>
  </React.Fragment>
];