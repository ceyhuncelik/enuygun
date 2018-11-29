import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'containers/Home';
import About from 'containers/About';
import Header from 'containers/Header';
import Footer from 'containers/Footer';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <div className="home-page-wrap">
        </div>
        <Switch>
          <Route exact path='/enuygun' component={Home}/>
          <Route exact path='/enuygun/about/:query' component={About}/>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;

// tasarım calısmalarına baslamak gerek artık
// biter bitmez de yatar uyuruz diyecem olmaz daha bi wideframe hazırlamamız gerekiyor
// way arkadas
