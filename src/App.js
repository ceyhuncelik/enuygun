import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'containers/Home';
import About from 'containers/About';

class App extends Component {
  render() {
    return(
      <div>
        <Switch>
          <Route exact path='/enuygun' component={Home}/>
          <Route exact path='/enuygun/about/:query' component={About}/>
        </Switch>
      </div>
    )
  }
}

export default App;


// yönlendirme islemleri
