import React, { useEffect, useMemo, useState } from 'react';

import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
// @ts-ignore
import { WindowContent, Window, Fieldset, Anchor, Hourglass } from 'react95';

// Importando Servico
import { getRepo, getLanguages } from "../../services/service-repo.service";

import './card-repo.css';

// Importando contexto para theme
import { ThemeContext } from '../../App';

// Importando Interfaces
import Languages from "../../interfaces/languages.interface";
import DataRepo from "../../interfaces/data-repo.interface";

interface DadosCardRepo {
    Nome: string;
}
const ProgressBar = styled.div`
        text-align: center;
        color: #fff;

`;

const TooltipLang = styled.span`
    width: auto;
    height: auto;
    display: none;
    position: absolute;
    top: 50%;
    border: 2px solid black;
    background-color: rgb(243,242,219);
    box-shadow: 4px 4px 10px 0 rgb(0 0 0 / 35%);
    padding: 5px;
    color: black;
    margin: 0 auto;

    ${ProgressBar}:hover &  {
        display: inline-block;
    }

`;

const CardRepo: React.FC<DadosCardRepo> = ({ Nome }) => {
    const contextType = ThemeContext;
    const [data, setData] = useState<DataRepo>(null);
    const [languages, setLanguages] = useState<Languages[]>([]);

    const totalLangCount = useMemo(() => languages.reduce((total, val) => total + val.Count, 0), [languages]);

    const percentage = (count, total) => ((count * 100) / total).toFixed(2) + '%';

    useEffect(() => {
        getRepo(Nome)
            .then(data => {
                setData(data);
            });

    }, [Nome]);

    useEffect(() => {
        getLanguages(data?.languages_url)
            .then(data => {
                const languagesRef: Languages[] = [];
                Object.keys(data).forEach((key) => {
                    languagesRef.push({ Nome: key.toLowerCase(), Count: data[key] });
                });

                setLanguages(languagesRef);
            });
    }, [data]);




    return (
        <ThemeProvider theme={contextType['_currentValue']}>
            <Window className="window">
                <WindowContent style={{ width: 'auto' }}>
                    <Fieldset label={
                        <span className="data-header">
                            {/* <Avatar size={50} src={data?.owner?.avatar_url} /> */}
                            <div>
                                <span className="data-title">{data?.name}</span><br />
                                <small>{data?.language}</small>
                            </div>

                        </span>
                    }>

                        <article className="data-body">
                            {/* <small>Criado por {data?.owner?.login}</small><br /><br /> */}
                            <Anchor rel="noopener" href={data?.html_url} target='_blank' className="anchor-repo">
                                {' '}
                                Git Hub
                            </Anchor>
                            <br />
                            <p className="description">
                                {data?.description}
                            </p>

                            {
                                (
                                    !data ?
                                        <p id="hourglass-repo">
                                            <Hourglass size={32} />
                                        </p>
                                        :
                                        ''

                                )
                            }

                            <div className="progress-box">
                                <div id="progress" className="progress">
                                    {
                                        languages.map((el, i) => {
                                            return (
                                                <ProgressBar key={i} style={{ width: percentage(el.Count, totalLangCount) }} id={el.Nome}>
                                                    <TooltipLang>
                                                        {el.Nome}
                                                    </TooltipLang>
                                                </ProgressBar>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </article>
                    </Fieldset>

                </WindowContent>
            </Window>

        </ThemeProvider>
    );
};

export default CardRepo;