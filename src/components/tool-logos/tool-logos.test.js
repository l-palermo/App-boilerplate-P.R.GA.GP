import React from 'react';

import ToolLogos from '.';

const requiredProps = {
    logos: [
        { src: 'test', alt: 'alt' },
        { src: 'test1', alt: 'alt1' },
    ],
};

const setupTest = () => render(<ToolLogos {...requiredProps} />);

describe('Tool logos', () => {
    afterEach(cleanup);
    it('should render the logos container', () => {
        const { getByTestId } = setupTest();

        const container = getByTestId('logos-container');
        expect(container).toBeVisible();
    });
    it('should render the logos', () => {
        const { getAllByRole } = setupTest();
        const logo = getAllByRole('img');
        expect(logo).toHaveLength(2);
    });
});
