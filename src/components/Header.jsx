import React from 'react';
import { PageType } from '../service/Configuration';

export default class Header extends React.Component {
    constructor() {
        super();
        this.handleToGallery = this.handleToGallery.bind(this);
        this.handleToAbout = this.handleToAbout.bind(this);
    }

    static get propTypes() {
        return {
            onMenuClick: React.PropTypes.func
        };
    }

    handleToGallery() {
        this.props.onMenuClick(PageType.gallery);
    }

    handleToAbout() {
        this.props.onMenuClick(PageType.about);
    }

    render() {
        return (
            <header>
                <span onClick={this.handleToGallery}>Gallery</span>
                <span onClick={this.handleToAbout}>About</span>
            </header>
        );
    }
}
