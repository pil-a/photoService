import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import { PageType, Links } from '../service/Configuration';

export default class Initial extends React.Component {
    constructor() {
        super();
        this.state = {
            page: PageType.gallery
        };
        this.handleRedirectToPage = this.handleRedirectToPage.bind(this);
    }

    handleRedirectToPage(newPage) {
        this.setState({
            page: newPage
        });
    }

    render() {
        return (
            <div>
                <Header onMenuClick={this.handleRedirectToPage} />
                <Body currentPage={this.state.page} />
                <Footer author={Links.authorLink} creator={Links.creatorLink} />
            </div>
        );
    }
}
