import React, { Component } from 'react';

// import { convertToJS } from './selectors/serviceSelector';

export default class Header extends Component {

  render() {
    console.log(this.props.serviceReducer, 'hadi bakalım hayrlısı');
    return (
      <div style={{width: '100%', backgroundColor: '#0f2133', position: 'fixed', height: '40px', top: 0, zIndex: 9999 }}>
        <div style={{ lineHeight: '40px', fontSize: '20px', marginLeft: '20px', color: '#fff', fontWeight: 600  }}>
          EnUygun Study Case
        </div>
      </div>

    );
  }
}



// listeleme sayfası
