import React from 'react';
import PropTypes from 'prop-types';

import { LogosContainer, Logo } from './styled-components';

const ToolLogos = ({ logos }) => {
    return (
        <LogosContainer data-testid="logos-container">
            {logos.map(({ src, alt }) => {
                return <Logo key={alt} src={src} alt={alt} />;
            })}
        </LogosContainer>
    );
};

ToolLogos.propTypes = {
    logos: PropTypes.arrayOf(
        PropTypes.shape({ src: PropTypes.string.isRequired, alt: PropTypes.string.isRequired })
            .isRequired
    ).isRequired,
};

export default ToolLogos;
