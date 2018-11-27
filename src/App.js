import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'containers/Home';
import About from 'containers/About';

class App extends Component {
  render() {
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
        </Switch>
      </div>
    )
  }
}

export default App;


// yönlendirme islemleri
