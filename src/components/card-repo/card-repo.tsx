import React, { useCallback, useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';
// @ts-ignore
import { WindowContent, Window, Fieldset, Avatar } from 'react95';
// @ts-ignore
import fxDev from "react95/dist/themes/fxDev";

// IMportando Servico
import { getRepo } from "../../services/service-repo";

import './card-repo.css';

interface DadosCardRepo {
    Nome: string;
}

const CardRepo: React.FC<DadosCardRepo> = ({ Nome }) => {
    const [nomeRepo, setNomeRepo] = useState(Nome);
    const [data, setData] = useState({});

    const getDataRepo = useCallback((nome) => {
        getRepo(nome)
            .then(data => {
                console.log(data);
                setData(data);
            });
    }, []);

    useEffect(() => {
        getDataRepo(nomeRepo);
    }, [getDataRepo, nomeRepo]);


    return (
        <ThemeProvider theme={fxDev}>
            <Window className="window">
                <WindowContent style={{ width: 'auto' }}>
                    <Fieldset label={
                        <span className="data-header">
                            <Avatar size={50} src={data['owner']?.avatar_url} />
                            <div>
                                <span className="data-title">{data['name']}</span><br />
                                <small>{data['language']}</small>
                            </div>

                        </span>

                    }
                        style={{ whiteSpace: 'no-wrap' }}>
                        <p className="data-body">
                            <small>Criado por {data['owner']?.login}</small><br /><br />
                            {data['description']}
                        </p>
                    </Fieldset>

                </WindowContent>
            </Window>
        </ThemeProvider>
    );
};

export default CardRepo;