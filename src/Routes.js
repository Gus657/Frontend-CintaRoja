import React from 'react';
import { Route } from 'react-router-dom';
import Donations from './components/Donations';
import CreateSuscriber from './components/CreateSuscriber';
import CreateDonation from './components/CreateDonation';

export default [
  <React.Fragment key={"Routes"}>
      <Route exact path="/donations" component={ Donations } ></Route>
      <Route exact path="/new-donation" component={ CreateDonation} ></Route>
      <Route exact path="/suscribers" component={ CreateSuscriber} ></Route>
      <Route exact path="/" component={ CreateSuscriber} ></Route>
  </React.Fragment>
];