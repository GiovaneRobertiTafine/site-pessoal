import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';

// Importando contexto para theme
import { ThemeContext } from '../../App';

// @ts-ignore
import { Tooltip } from 'react95';

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
        return themeState;
    };

    return (
        <ThemeProvider theme={contextType['_currentValue']}>
            <span onClick={() => onClick(contextTheme())} className="button-theme">
                {

                    (themeState === Themes.original ?
                        (
                            <Tooltip text='Theme Sun' enterDelay={100} leaveDelay={500}>
                                <span role='img' aria-label='sun'>
                                    ☀️
                            </span>
                            </Tooltip>
                        ) :
                        (
                            <Tooltip text='Theme Moon' enterDelay={100} leaveDelay={500}>
                                <span role='img' aria-label='moon'>
                                    🌘
                            </span>

                            </Tooltip>

                        )

                    )

                }

            </span>

        </ThemeProvider>
    );
};

export default ToggleTheme;