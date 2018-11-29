import React, { Component } from 'react';

// import { convertToJS } from './selectors/serviceSelector';

export default class Footer extends Component {

  render() {
    console.log(this.props.serviceReducer, 'hadi bakalım hayrlısı');
    return (
      <div style={{width: '100%', backgroundColor: '#0f213333', position: 'absolute', height: '20px', bottom: 0, zIndex: 9999 }}>
        <div style={{ lineHeight: '20px', fontSize: '12px', marginRight: '20px', color: '#fff66', textAlign:'right',  }}>
          Ceyhun ÇELİK
        </div>
      </div>

    );
  }
}



// listeleme sayfası
