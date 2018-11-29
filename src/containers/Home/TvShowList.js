import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TvShowList extends Component {

  generateList = (data) => {
    if(data) {
      const tvItems = data.map((item) => {
        return (<TvItem {...item.show} />);
      })
      return tvItems;
    }
    return null;
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
          <Link to={'/enuygun/about/'+props.name}>
            Detay
          </Link>
        </div>
      </div>
    </div>
  );
}
// listeleme sayfası
