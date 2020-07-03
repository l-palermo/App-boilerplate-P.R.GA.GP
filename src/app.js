import React from 'react';

import ToolLogos from './components/tool-logos/index.js';
import ReactLogo from './components/react-logo';
import Header from './components/header';
import logos from './assets/assets';

const App = () => {
    return (
        <React.Fragment>
            <ReactLogo />
            <Header
                title="React App Boilerplate"
                subTitle="This application uses the following tools:"
            />
            <ToolLogos logos={logos} />
        </React.Fragment>
    );
};

export default App;
