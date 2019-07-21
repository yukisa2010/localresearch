import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Thanks from './Thanks';
import Memo from './Memo';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';


ReactDOM.render(
<BrowserRouter>
  <div>
    <Route exact path='/' component={App}/>
    <Route path="/thanks" component={Thanks} />
    <Route path="/memo" component={Memo} />
  </div>
</BrowserRouter>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();