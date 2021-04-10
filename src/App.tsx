import React, { Fragment } from 'react';
import './App.css';

import GlobalStyles from "./styles/global-style";

// Import Components 
import CardRepo from "./components/card-repo/card-repo";

// Import Constants
import nomesRepositorios from "./constants/nomes-repositorios";

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
                {
                    nomesRepositorios.map((nome, i) => {
                        return (
                            <CardRepo Nome={nome} key={i} />
                        );
                    })
                }
            </div>


            {/* <section className="section section--contact" data-slide="4"
                style={{ transform: "matrix(1, 0, 0, 1, 0, 0)", height: "640px" }}>
                <div className="scanlines"></div>
            </section> */}

        </Fragment>
    );
}

export default App;
