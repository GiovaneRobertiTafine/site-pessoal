import React, { useState } from 'react';

import styled, { DefaultTheme, ThemeProvider } from 'styled-components';

// Importando contexto para theme
import { ThemeContext } from '../../App';

// @ts-ignore
import { Tooltip, Checkbox } from 'react95';

import { useDispatch } from "react-redux";

// Importando enums
import { Themes } from "../../enums/themes.enum";

import "./toggle-theme.css";

const Toggle = styled.div<{ theme: DefaultTheme; }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background: #101010;
    border-radius: 50%;
    top: 0px;
    left: 0px;
    position: relative;
    z-index: 3;

    &>.left-circle {
        width: 5px;
        height: 10px;
        background-color: ${({ theme }) => theme.colors.body};
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;


        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        z-index: 10;
    }

    &>.right-circle {
        width: 5px;
        height: 10px;
        background-color: ${({ theme }) => theme.colors.text};
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;


        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        z-index: 10;
    }

    &>.back-circle {
        width: 15px;
        height: 15px;
        border: 0.7rem solid ${({ theme }) => theme.colors.body};
        border-radius: 50%;
        

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        position: absolute;

        z-index: 7;
    }

    /* .spinner {
        content: '';
        box-sizing: border-box;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;

        border-radius: 50%;
        border: 0.8rem solid transparent;
        border-top-color: RosyBrown;
        border-bottom-color: RosyBrown;
        
        
        animation: scaleT 1s infinite linear;
        z-index: 3;
    } */
`;

const ToggleTheme = () => {
    const [themeState, setTheme] = useState<Themes>(Themes.original);
    const dispatch = useDispatch();

    const contextType = ThemeContext;

    const contextTheme = () => {
        if (themeState === Themes.fxDev) {
            setTheme(Themes.original);
        } else {
            setTheme(Themes.fxDev);
        }
        dispatch({ type: themeState });
    };



    return (

        <ThemeProvider theme={contextType['_currentValue']}>
            <span onClick={() => contextTheme()} className="button-theme">
                <Tooltip text='Theme Sun' enterDelay={100} leaveDelay={500}>
                    <Toggle>
                        <div className="back-circle"></div>
                        <div className="left-circle"></div>
                        <div className="right-circle"></div>
                        <div className="spinner"></div>
                    </ Toggle>
                </Tooltip>

            </span>
            {/* <div className="theme-switch-wrapper" onChange={() => contextTheme()} >
                <label className="theme-switch" htmlFor="checkbox" >
                    <input type="checkbox" id="checkbox" />
                    <div className="slider round" >
                        <p role="img" className="icon-theme" aria-label="sun">&#x2600;&#xFE0F;</p>
                        <p role="img" className="icon-theme" aria-label="sun">&#x1F311;</p>

                    </div>
                </label>
            </div> */}


        </ThemeProvider>
    );
};

export default ToggleTheme;