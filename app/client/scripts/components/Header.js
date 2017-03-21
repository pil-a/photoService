import React from 'react';
import { PageType } from '../manager/Configuration';

export default class Header extends React.Component {
  constructor() {
    super();
    this.gallery = this.gallery.bind(this);
    this.about = this.about.bind(this);
  }

  gallery() {
    this.props.onMenuClick(PageType.gallery);
  }

  about() {
    this.props.onMenuClick(PageType.about);
  }

  render() {
    return (
      <header>
        <span onClick={this.gallery}>Gallery</span>
        <span onClick={this.about}>About</span>
      </header>
    );
  }
}
