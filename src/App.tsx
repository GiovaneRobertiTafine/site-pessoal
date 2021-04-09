import React, { Fragment } from 'react';
import './App.css';

import { ThemeProvider } from 'styled-components';
// @ts-ignore
import { List, ListItem, Divider, Button } from 'react95';
// @ts-ignore
import fxDev from "react95/dist/themes/fxDev";
// original Windows95 font (optionally)

import GlobalStyles from "./styles/global-style";

//Import Components 
import CardRepo from "./components/card-repo/card-repo";

function App() {
    return (
        <Fragment>
            <h1>Giovane Roberti Tafine</h1>

            <div className="conteudo">
                <GlobalStyles />
                {/* <ThemeProvider theme={fxDev}>
                    <a href="https://github.com/mandrilla34" target="_blank"><Button primary>GitHub</Button></a>
                </ThemeProvider>

                <a href="https://www.linkedin.com/in/mandrilla/" target="_blank"><button>LinkedIn</button></a>
                <a href="mailto:kstv23@hotmail.com?subject=Olá"><button>kstv23@hotmail.com</button></a>
                <br /> */}
                {/* <div className="github-card" data-user="mandrilla34" data-repo="tic-tac-toe"></div> */}
                <CardRepo Nome="tic-tac-toe" />
                <CardRepo Nome="search-bar" />
            </div>
            <section style={{ width: '50%', position: 'absolute', top: '70%', left: '25%' }}>
                <div id="progress" className="progress">
                    <div className="progress-bar bg-weak" style={{ width: "33.33%" }}>C#</div>
                    <div className="progress-bar bg-good" style={{ width: "33.33%" }}>JavaScript</div>
                    <div className="progress-bar bg-strong" style={{ width: "20%" }}>HTML</div>
                </div>
            </section>

            {/* <section className="section section--contact" data-slide="4"
                style={{ transform: "matrix(1, 0, 0, 1, 0, 0)", height: "640px" }}>
                <div className="scanlines"></div>
            </section> */}

        </Fragment>
    );
}

export default App;
