import { styled } from 'linaria/react';

import { mqMedium } from '../constants.js';

export const Title = styled.h1`
    color: black;
    text-align: center;
    font-size: 3rem;

    @media (${mqMedium}) {
        font-size: 6rem;
    }
`;

export const SubTitle = styled.p`
    color: black;
    text-align: center;
    font-size: 1.5rem;

    @media (${mqMedium}) {
        font-size: 3rem;
    }
`;
