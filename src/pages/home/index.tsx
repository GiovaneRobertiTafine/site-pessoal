import { Fragment } from 'react';

import { ThemeProvider } from 'styled-components';

// @ts-ignore
import { Avatar, Panel } from 'react95';

import "./stylesheet.css";

// Importando contexto para theme
import { ThemeContext } from '../../App';

export default function Home() {
    const contextType = ThemeContext;
    return (
        <Fragment>
            <ThemeProvider theme={contextType['_currentValue']}>
                <div className="container">
                    <div className="row">
                        <div className="col column d-flex justify-content-center">
                            <Avatar size={100} className="avatar">
                                <span role='img' aria-label='🚀'>
                                    🚀
                </span>
                            </Avatar>
                            <Panel
                                variant='outside'
                                shadow='true'
                                className='panel'
                            >
                                <h3 className="nome">Giovane Roberti Tafine</h3>
                                <span>Web Designer Jr.</span>
                                <div className="row contacts justify-content-between mt-3">
                                    <a href="https://www.linkedin.com/in/mandrilla/" className="col mt-3 mt-lg-0 mt-md-0" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="" /></a>
                                    <a href="https://dev.to/mandrilla" className="col mt-3 mt-lg-0 mt-md-0" target="_blank"><img src="https://img.shields.io/badge/dev.to-0A0A0A?style=for-the-badge&logo=dev.to&logoColor=white" alt="" /></a>
                                    <a href="https://github.com/mandrilla34" className="col mt-3 mt-lg-0 mt-md-0" target="_blank"><img alt="GitHub followers" src="https://img.shields.io/github/followers/mandrilla34?color=%230D1117&label=GITHUB&logo=github&style=for-the-badge"></img></a>

                                </div>
                            </Panel>

                        </div>

                    </div>

                </div>
            </ThemeProvider>

        </Fragment>
    );
}