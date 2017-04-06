import React from 'react';

const Footer = ({ author, creator }) => (
    <footer>
        <p>
            {'© 2017 '}
            <a href={author} target="_blank">
                Lena.BWolf
            </a>
        </p>
        <p>
            {'Created by '}
            <a href={creator} target="_blank">
                Pil.A
            </a>
        </p>
    </footer>
);
Footer.propTypes = {
    author: React.PropTypes.string,
    creator: React.PropTypes.string
};
Footer.defaultProps = {
    author: '',
    creator: ''
};

export default Footer;