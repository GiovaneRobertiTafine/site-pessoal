import React, { Fragment, useState } from 'react';
import './App.css';

import GlobalStyles from "./styles/global-style";

// Import Components 
import ToggleTheme from './components/toggle-theme/toggle-theme';

// Importando enums
import { Themes } from "./enums/themes.enum";

import fxDev from "react95/dist/themes/fxDev";
import original from "react95/dist/themes/original";

import Routes from './routes';

export const ThemeContext = React.createContext(fxDev);

function App() {
    const [theme, setTheme] = useState(fxDev);

    function handleChange(theme) {
        if (theme === Themes.fxDev) {
            setTheme(fxDev);
        } else {
            setTheme(original);
        }
    }

    return (
        <Fragment>
            <GlobalStyles />
            <ThemeContext.Provider value={theme}>
                <div className="d-flex justify-content-start align-items-center position-absolute">
                    <h1 className="mr-3">Giovane Roberti Tafine</h1>

                    <ToggleTheme onClick={handleChange} />

                </div>
                <div className="border pt-5  w-100 border-primary" style={{ height: 'auto' }}>
                    <Routes />
                </div>
            </ThemeContext.Provider>
        </Fragment>
    );
}

export default App;
