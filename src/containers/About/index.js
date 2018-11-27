import React, { Component } from 'react';
import { connect } from 'react-redux';
import { denemeAction, toggleTodo } from 'actions/serviceAction';
import { serviceReducerToJS } from 'selector';
// import { convertToJS } from './selectors/serviceSelector';

class About extends Component {
  testRedux2 = () => {
    // this.props.dispatch(simpleAction());
    this.props.dispatch(denemeAction('key','value'));
  }
  render() {
    console.log(this.props, 'hadi bakalım hayrlısı');
    return (
      <div className="about-page-wraper">
        <button onClick={() => this.testRedux2()}>Test Redux</button>
        <button onClick={() => this.props.dispatch(toggleTodo(20))}>Test asd</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
 dispatch,
})
const mapStateToProps = (store) => ({
  serviceReducer: serviceReducerToJS(store)
})

export default connect(mapStateToProps, mapDispatchToProps)(About);


// burada ufak bir sorunumuz var
// anlamıs degılım acaba baska bir reducer eklememiz falan mı gerekiyor
