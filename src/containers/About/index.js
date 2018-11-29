import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTvShows } from 'thunks/serviceMiddleware'
import { serviceReducerToJS } from 'selector';
import { Grid, Row, Col } from 'react-bootstrap';
import { Markup } from 'interweave';
// import { convertToJS } from './selectors/serviceSelector';
import { API_SINGLE_SEARCH } from 'paths';
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: this.props.match.params.query || null,
    }
    this.generateGenres = this.generateGenres.bind(this);
  }
  componentWillMount() {
    this.props.dispatch(fetchTvShows(this.state.query, { q: this.state.query }, API_SINGLE_SEARCH, (res) => {
      this.setState({
        name: res.name,
        summary: res.summary,
        url: res.url,
        genres: res.genres,
        average: (res.rating) ? res.rating.average : null,
        countryCode: (res.network) ? res.network.country.code : 'TR',
        countryName: (res.network) ? res.network.country.name : null,
        image: (res.image) ? res.image.original : null,
      });
    }));
  }

  generateGenres(genres = []) {
    let temp = '';
    genres.forEach((item, index) => {
      temp += item;
      if(index < genres.length -1) { temp += ', '; }
    });
    return temp;
  }

  render() {
    const { name, average, countryCode, countryName, image, summary, url, genres } = this.state;

    return (
      <div className="about-page-wraper">
        <Grid>
          <Row>
            <Col lg={12}>
              <label className="header"> </label>
            </Col>
          </Row>
          <Row className="row-equal-height">
            <Col lg={4} md={4} sm={6} xs={12}>
              <div className="left-box">
                <img className="img" alt="" src={image}/>
              </div>
            </Col>
            <Col lg={8} md={8} sm={6} xs={12}>
              <div className="right-box">
                <label className="header">{name}</label>
                <div className="empty1">  </div>

                <div className="rate-country">
                  <span className="rate">
                    Rating: {average}
                  </span>
                  <span className="country">
                    Country: {countryName} <img alt={name} height="24" src={'https://www.countryflags.io/'+countryCode+'/flat/64.png'} />
                  </span>
                </div>
                <div className="summary">
                  <label className="summary-header">Summary</label>
                  <Markup content={summary} />
                </div>
                <div className="genres">
                  {this.generateGenres(genres)}
                </div>
                <div className="link-box-goBack">
                  <a target="_blank" href={url}> Go to TVmaze.</a>
                </div>
                <div className="link-box">
                  <a role="button" onClick={() => this.props.history.goBack()}> Return Home Page</a>
                </div>

              </div>
            </Col>
          </Row>
        </Grid>
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
