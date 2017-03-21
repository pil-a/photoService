import React from 'react';
import { Configuration } from '../manager/Configuration';

export default class About extends React.Component {
  render() {
    return (
      <div className='about-container'>
        <div>
          <img src={Configuration.aboutPhoto} />
          <span>contacts</span>
        </div>
        <div>
          about me
        </div>
      </div>
    );
  }
}
