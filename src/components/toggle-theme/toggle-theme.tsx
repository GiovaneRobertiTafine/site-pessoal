import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';

// Importando contexto para theme
import { ThemeContext } from '../../App';

// @ts-ignore
import { Tooltip, Checkbox } from 'react95';

import { useDispatch } from "react-redux";

// Importando enums
import { Themes } from "../../enums/themes.enum";

import "./toggle-theme.css";

import ThemeStore from '../../interfaces/theme-store.interface';

const ToggleTheme: React.FC = () => {
    const [themeState, setTheme] = useState<Themes>(Themes.original);
    const themeStore: ThemeStore = { value: themeState };
    const dispatch = useDispatch();

    const contextType = ThemeContext;

    const contextTheme = () => {
        if (themeState === Themes.fxDev) {
            setTheme(Themes.original);
        } else {
            setTheme(Themes.fxDev);
        }
        themeStore.value = themeState;
        dispatchTheme();
    };

    function dispatchTheme() {
        dispatch({ themeStore, type: themeState });
    }

    return (
        <ThemeProvider theme={contextType['_currentValue']}>
            {/* <span onClick={() => onClick(contextTheme())} className="button-theme">
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
                                    🌑
                            </span>

                            </Tooltip>

                        )

                    )

                }

            </span> */}
            <div className="theme-switch-wrapper" onChange={() => contextTheme()} >
                <label className="theme-switch" htmlFor="checkbox" >
                    <input type="checkbox" id="checkbox" />
                    <div className="slider round" >
                        <p role="img" className="icon-theme" aria-label="sun">&#x2600;&#xFE0F;</p>
                        <p role="img" className="icon-theme" aria-label="sun">&#x1F311;</p>

                    </div>
                </label>
            </div>


        </ThemeProvider>
    );
};

export default ToggleTheme;