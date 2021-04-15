import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';

// Importando contexto para theme
import { ThemeContext } from '../../App';

// Importando enums
import { Themes } from "../../enums/themes.enum";

import "./toggle-theme.css";

const ToggleTheme: React.FC<{ onClick; }> = ({ onClick }) => {
    const [themeState, setTheme] = useState<Themes>(Themes.original);

    const contextType = ThemeContext;

    const contextTheme = () => {
        if (themeState === Themes.fxDev) {
            setTheme(Themes.original);
        } else {
            setTheme(Themes.fxDev);
        }
        // console.log(themeState);
        return themeState;
    };

    return (
        <ThemeProvider theme={contextType['_currentValue']}>
            <span onClick={() => onClick(contextTheme())} className="button-theme">
                {

                    (themeState === Themes.original ?
                        (
                            <span role='img' aria-label='sun'>
                                ☀️
                            </span>
                        ) :
                        (
                            <span role='img' aria-label='moon'>
                                🌘
                            </span>

                        )

                    )

                }

            </span>

        </ThemeProvider>
    );
};

export default ToggleTheme;