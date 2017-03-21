import React from 'react';
import HttpManager from '../manager/HttpManager';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.httpManager = new HttpManager();
  }

  render() {
    this.httpManager.getData();
    return (
      <main>

      </main>
    );
  }
}
