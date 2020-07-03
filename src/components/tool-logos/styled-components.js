import { styled } from 'linaria/react';

export const LogosContainer = styled.div`
    display: grid;
    max-width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-content: space-evenly;
    align-items: center;
    justify-items: center;
    margin: 0 10rem;
`;

export const Logo = styled.img`
    height: 5rem;
    width: auto;
    margin: 1rem;
`;
