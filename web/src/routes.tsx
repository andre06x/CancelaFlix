import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeRegister from './Pages/HomeRegister';
import SeriesC from './Pages/SeriesCadastred';
import HomePage from './Pages/Home';
import FindSeries from './Pages/FindSeries';

const Routes: React.FC = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/register"  component={HomeRegister}/>
        <Route path="/cadastred" component={SeriesC}/>
        <Route path="/find-series" component={FindSeries}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
