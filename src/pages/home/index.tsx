import React, { Fragment } from 'react';

import styled, { DefaultTheme, ThemeProvider } from 'styled-components';

// @ts-ignore
import { Avatar, Panel, Window, WindowContent, WindowHeader, Button } from 'react95';

import "./stylesheet.css";

// Importando contexto para theme
import { ThemeContext } from '../../App';

import ToggleTheme from '../../components/toggle-theme/toggle-theme';

const Content = styled.span<{ theme: DefaultTheme; }>`
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;


  &::after, &::before {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.colors.text};
  }

  &:before {
    height: 100%;
    width: 3px;
    left: 50%;
    transform: translateX(-50%);
  }

  &:after {
    height: 3px;
    width: 100%;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default function Home() {
    const contextType = ThemeContext;
    return (
        <Fragment>
            <ThemeProvider theme={contextType['_currentValue']}>
                <div className="row w-100">
                    <div className="col column d-flex justify-content-center">
                        <div className="avatar-theme d-flex justify-content-center align-items-center position-relative">
                            <Avatar size={100} className="avatar">
                                <span role='img' aria-label='🚀'>
                                    🚀
                            </span>
                            </Avatar>
                            <div className="toggle-theme">
                                <ToggleTheme />
                            </div>

                        </div>
                        <Panel
                            variant='outside'
                            shadow='true'
                            className='panel'
                        >
                            <h3 className="nome">Giovane Roberti Tafine</h3>
                            <span>Desenvolvedor Web Jr.</span>

                            <div className="d-flex flex-column flex-md-row flex-lg-row justify-content-between px-auto mt-3">
                                <a href="https://www.linkedin.com/in/mandrilla/" rel="noopener noreferrer" className="mt-3 mt-lg-0 mt-md-0" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="" /></a>
                                <a href="https://dev.to/mandrilla" rel="noopener noreferrer" className=" mt-3 mt-lg-0 mt-md-0" target="_blank"><img src="https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white" alt="" /></a>
                                {/* <a href="https://github.com/mandrilla34" rel="noopener noreferrer" className="col mt-3 mt-lg-0 mt-md-0" target="_blank"><img src="https://img.shields.io/badge/GitHub-0D1117?style=for-the-badge&logo=dev.to&logoColor=white?logoWidth=40" alt="GitHub followers" ></img></a> */}
                                <a href="https://github.com/mandrilla34" rel="noopener noreferrer" className=" mt-3 mt-lg-0 mt-md-0" target="_blank"><img src="https://img.shields.io/github/followers/mandrilla34?color=%230D1117&label=GITHUB&logo=github&style=for-the-badge" alt="GitHub followers" ></img></a>

                            </div>


                        </Panel>

                    </div>
                    <Window resizable className='window'>
                        <WindowHeader className='window-header'>
                            <span>react95.exe</span>
                            <Button>
                                <Content className='close-icon' />
                            </Button>
                        </WindowHeader>

                        <WindowContent>
                            <p>
                                When you set &quot;resizable&quot; prop, there will be drag handle in
                                the bottom right corner (but resizing itself must be handled by you
                                tho!)
                                </p>
                        </WindowContent>

                    </Window>

                </div>

            </ThemeProvider>

        </Fragment>
    );
}