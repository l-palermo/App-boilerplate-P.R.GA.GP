import React from 'react';

import Header from '.';

const requiredProps = {
    title: 'title test',
    subTitle: 'subTitle test',
};

const setupTest = () => render(<Header {...requiredProps} />);

describe('Header', () => {
    it('should render a title', () => {
        const { getByTestId } = setupTest();
        const title = getByTestId('title');
        expect(title).toHaveTextContent(requiredProps.title);
    });
    it('should render a sub title', () => {
        const { getByTestId } = setupTest();
        const title = getByTestId('sub-title');
        expect(title).toHaveTextContent(requiredProps.subTitle);
    });
});
