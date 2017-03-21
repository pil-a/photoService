import React from 'react';
import Gallery from './Gallery';
import About from './About';
import { PageType } from '../manager/Configuration';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var page;
    switch (this.props.currentPage) {
      case PageType.gallery:
        page = <Gallery />;
        break;
      case PageType.about:
        page = <About />;
        break;
      default:
        page = <Gallery />;
    }
    return (
      <main>
        {page}
      </main>
    );
  }
}
