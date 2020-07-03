import React from 'react';
import PropTypes from 'prop-types';

import reactLogoImage from '../../assets/react.png';
import { reactLogoContainer } from './style-class';
import { Logo } from './styled-components';

const ReactLogo = ({ speed }) => {
    return (
        <div className={reactLogoContainer}>
            <Logo src={reactLogoImage} speed={speed} alt="react logo" />
        </div>
    );
};

ReactLogo.propTypes = {
    speed: PropTypes.number,
};

ReactLogo.defaultProps = {
    speed: 7,
};

export default ReactLogo;
