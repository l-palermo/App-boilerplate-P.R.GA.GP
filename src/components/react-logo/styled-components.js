import { styled } from 'linaria/react';

import { mqMedium } from '../constants.js';

export const Logo = styled.img`
    height: 12rem;
    margin: 3rem;

    @media (${mqMedium}) {
        height: 16rem;
    }

    @keyframes rotate {
        to {
            transform: rotate(360deg);
        }
    }

    animation-name: rotate;
    animation-duration: ${({ speed }) => `${speed}s`};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
`;
