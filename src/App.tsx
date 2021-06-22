import React from 'react';
import './App.css';

import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from "./styles/global-style";
import { lightTheme, darkTheme } from './styles/theme';

// Importando enums
import { Themes } from "./enums/themes.enum";

import fxDev from "react95/dist/themes/fxDev";
import original from "react95/dist/themes/original";

import { useSelector } from "react-redux";


import Routes from './routes';
import ThemeStore from './interfaces/theme-store.interface';

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
        align-items: center;
        justify-content: inherit !important;

        &::after, &::before {
            content: '';
            margin: auto !important;
        }

        padding-top: 5%;
    }
`;

function App() {
    const theme = useSelector((state: ThemeStore) => {
        if (state?.value === Themes.fxDev) {
            return fxDev;
        } else {
            return original;
        }
    });

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeProvider theme={theme['name'] === Themes[Themes.fxDev] ? darkTheme : lightTheme}>
                <>
                    <GlobalStyles />
                    <Content className="w-100 container d-flex flex-column">
                        <Routes />


                    </Content>
                </>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default App;
