import React from 'react';
import ReactDOM from 'react-dom';
import Main from 'views/main';
import Analyze from 'views/analyze';
import Detail from 'views/detail';
import Show from 'views/show';
import Save from 'views/save';
import Register from 'views/register';

import { Route, withRouter, Switch , BrowserRouter} from "react-router-dom";
import Header from 'components/common/header'

import 'scss/index.scss'


ReactDOM.render(
    <BrowserRouter>
      <Header/>
      <Route path='/' exact={true} component={Main} />
      <Route path='/analyze' exact={true} component={Analyze} />
      <Route path='/detail' exa ct={true} component={Detail} />
      <Route path='/show' exa ct={true} component={Show} />
      <Route path='/save' exa ct={true} component={Save} />
      <Route path='/register' exa ct={true} component={Register} />
    </BrowserRouter>,
  document.getElementById('root')
);

