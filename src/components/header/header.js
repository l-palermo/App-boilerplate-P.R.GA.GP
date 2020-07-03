import React from 'react';
import PropTypes from 'prop-types';

import { Title, SubTitle } from './styled-components';

const Header = ({ title, subTitle }) => {
    return (
        <React.Fragment>
            <Title data-testid="title">{title}</Title>
            <SubTitle data-testid="sub-title">{subTitle}</SubTitle>
        </React.Fragment>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};

export default Header;
