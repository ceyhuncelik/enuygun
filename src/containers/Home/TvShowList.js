import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TvShowList extends Component {

  generateList = (data) => {
    if(data) {
      const tvItems = data.map((item) => {
        const pathVariable = this.urlParse(item.show.url);
        return (<TvItem {...item.show} pathVariable={pathVariable} />);
      })
      return tvItems;
    }
    return null;
  }
  urlParse = (url = '') => {
    const i = url.lastIndexOf('/');
    return url.slice(i+1);
  }
  render() {
    console.log(this.props.serviceReducer, 'hadi bakalım hayrlısı');
    const items = this.generateList(this.props.data);
    return (
      <div>
        {this.generateList(this.props.data)}
      </div>
      );
  }
}

export const TvItem = (props) => {
  return (
    <div className="items-wrap">
      <div className="item">
        <div className="img-wrap">
          <img className="img" alt={props.name} src={props.image.medium}/>
        </div>
        <div className="item-content">
          <span className="name">{props.name}</span>
          <br/>
          <span className="rate">{props.rating.average || '0.0'}</span>
        </div>
        <div className="link-box">
          <Link to={'/enuygun/about/'+props.pathVariable}>
            Detay
          </Link>
        </div>
      </div>
    </div>
  );
}
// listeleme sayfası
