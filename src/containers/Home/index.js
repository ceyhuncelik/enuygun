import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { Grid, Row } from 'react-bootstrap';
import { fetchTvShows } from 'thunks/serviceMiddleware'
import { serviceReducerToJS } from 'selector';
import TvShowList from 'containers/Home/TvShowList';
// import { convertToJS } from './selectors/serviceSelector';

import { API_SEARCH } from 'paths';

class Home extends Component {
  componentWillMount(){
    this.props.dispatch(fetchTvShows('batmanTvShowList', { q: 'batman' }, API_SEARCH));
  }
  render() {
    return (
      <div>
        <div className="tv-show-list-wrap">
        <Grid>
          <Row>
            <TvShowList data={(this.props.serviceReducer.batmanTvShowList || null)} />
          </Row>
        </Grid>
        </div>
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
