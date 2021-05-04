import React, { Fragment, useState } from 'react';
import './App.css';

import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from "./styles/global-style";
import { lightTheme, darkTheme } from './styles/theme';

// Import Components 
import ToggleTheme from './components/toggle-theme/toggle-theme';

// Importando enums
import { Themes } from "./enums/themes.enum";

import fxDev from "react95/dist/themes/fxDev";
import original from "react95/dist/themes/original";

import Routes from './routes';

export const ThemeContext = React.createContext(fxDev);


const Content = styled.div`
    height: 100vh;  

    ${window.location.pathname === '/repositories' ?
        `
        padding-top: 5%;
        align-items: inherit;
        justify-content: inherit;
        `:
        `
        padding-top: 0px;
        align-items: center;
        justify-content: center;
        `
    }

    @media (max-width: 991px) {
        align-items: inherit;
        justify-content: inherit;

        &::after, &::before {
            content: ${window.location.pathname === '/repositories' ? '' : 'none'};
            margin: auto;
        }

        padding-top: 5%;
    }
`;

const ToogleContainer = styled.div`
    z-index: 1000;
    position: absolute;
    right: 30%;
    top: 32%;

    @media (max-width: 991px) {
    ${window.location.pathname === '/repositories' ?
        `
            left: 80%;
        `
        :
        `
            top: 5%;
            right: 30%;
        `
    }
    }

`;

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
        <ThemeContext.Provider value={theme}>
            <ThemeProvider theme={theme?.name === Themes[Themes.fxDev] ? darkTheme : lightTheme}>
                <>
                    <GlobalStyles />
                    <Content className="w-100 container d-flex flex-column">
                        <ToogleContainer>
                            <ToggleTheme onClick={handleChange} />

                        </ToogleContainer>
                        <Routes />
                    </Content>
                </>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default App;
