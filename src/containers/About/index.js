import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTvShows } from 'thunks/serviceMiddleware'
import { serviceReducerToJS } from 'selector';
// import { convertToJS } from './selectors/serviceSelector';
import { API_SINGLE_SEARCH } from 'paths';
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: this.props.match.params.query || null,
    }
  }
  componentWillMount() {
    this.props.dispatch(fetchTvShows(this.state.query, { q: this.state.query }, API_SINGLE_SEARCH));
  }

  render() {
    console.log(this.props, 'hadi bakalım hayrlısı');
    return (
      <div className="about-page-wraper">
        <button onClick={() => this.props.history.goBack()}> --------------- ana sayfaya dön --------------</button>
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
