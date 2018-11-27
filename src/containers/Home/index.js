import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from 'logo.svg';
import { simpleAction } from 'actions/serviceAction';
import { serviceReducerToJS } from 'selector';
// import { convertToJS } from './selectors/serviceSelector';

class Home extends Component {
  testRedux = () => {
    // this.props.simpleAction();
    this.props.dispatch(simpleAction());
    // this.props.dispatch(denemeAction('key','value'));
  }
  render() {
    console.log(this.props.serviceReducer, 'hadi bakalım hayrlısı');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={() => this.testRedux()}>Test Redux</button>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
 dispatch,
})
const mapStateToProps = store => ({
  serviceReducer: serviceReducerToJS(store)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);


// listeleme sayfası
