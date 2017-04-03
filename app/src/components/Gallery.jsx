import React from 'react';
import LoadingBar from './LoadingBar';
import PhotoManager from '../service/PhotoManager';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: []
        };
        this.photo = new PhotoManager();
        this.getUrls = this.getUrls.bind(this);
        this.getUrls();
    }

    getUrls() {
        this.photo
            .getUrls()
            .then(newUrls => {
                this.setState({
                    urls: newUrls
                });
            })
            .catch(error => {
                return Promise.reject(Error(error.message));
            });
    }

    render() {
        let res;
        if (this.state.urls.length !== 0) {
            res = this.state.urls.map(x =>
                <img key={x.title}
                    src={x.link} className='preview-logo'
                    alt={x.title} title={x.title} />
            );
        } else {
            res = <LoadingBar />;
        }
        return <div className='content'>{res}</div>;
    }
}
