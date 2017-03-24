import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import { PageType } from '../manager/Configuration';

export default class Index extends React.Component {
	constructor() {
		super();
		this.state = {
			page: PageType.gallery
		};
		this.redirectToPage = this.redirectToPage.bind(this);
	}

	redirectToPage(newPage) {
		this.setState({
			page: newPage
		});
	}

	render() {
		return (
			<div>
				<Header onMenuClick={this.redirectToPage} />
				<Body currentPage={this.state.page}/>
				<Footer />
			</div>);
	}
}
