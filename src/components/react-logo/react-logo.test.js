import React from 'react';

import ReactLogo from '.';

const setupTest = () => render(<ReactLogo />);

describe('React logo', () => {
    afterEach(cleanup);

    it('should render the react logo', () => {
        const { getByRole } = setupTest();
        expect(getByRole('img')).toHaveAttribute('alt', 'react logo');
    });
});
