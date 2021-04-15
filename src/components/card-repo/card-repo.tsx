import React, { useEffect, useMemo, useState } from 'react';

import { ThemeProvider } from 'styled-components';
// @ts-ignore
import { WindowContent, Window, Fieldset, Avatar } from 'react95';

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
        setLanguages([]);
        console.log();
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
                            <Avatar size={50} src={data?.owner?.avatar_url} />
                            <div>
                                <span className="data-title">{data?.name}</span><br />
                                <small>{data?.language}</small>
                            </div>

                        </span>
                    }>

                        <article className="data-body">
                            <small>Criado por {data?.owner?.login}</small><br /><br />
                            {data?.description}

                            <div className="progress-box">
                                <div id="progress" className="progress">
                                    {
                                        languages.map((el, i) => {
                                            return (
                                                <div className="progress-bar" id={el.Nome} key={i} style={{ width: percentage(el.Count, totalLangCount) }}></div>
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