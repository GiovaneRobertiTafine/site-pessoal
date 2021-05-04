import { Fragment } from 'react';

// Import Components 
import CardRepo from "../../components/card-repo/card-repo";

// Import Constants
import nomesRepositorios from "../../constants/nomes-repositorios";

export default function Repositories() {
    return (
        <Fragment>
            <div className="container">
                <div className="row">

                    {
                        nomesRepositorios.map((nome, i) => {
                            return (
                                <div className="my-3 col-12 col-sm-12 col-lg-6 col-xl-4" key={i} style={{ textAlign: 'center' }}>
                                    <CardRepo Nome={nome} />

                                </div>

                            );
                        })
                    }

                </div>
            </div>
        </Fragment>
    );
}