import { pathRepo, path } from "./api";
import DataRepo from "../interfaces/data-repo.interface";
import Languages from "../interfaces/languages.interface";


const getRepo = async (nomeRepo: string): Promise<DataRepo> => {
    // return fetch(`${pathRepo}/${nomeRepo}`, headers) // fetch é mais simples mas não é recomendado por questão de segurança
    //     .then((response) => response.json());
    return await pathRepo.get<DataRepo>(`/${nomeRepo}`)
        .then(
            (response) => response.data
        )
        .catch((err) => {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            }
            return null;
        });


};

const getLanguages = async (url: string): Promise<Languages[]> => {
    if (!url) return [];
    return await path.get<Languages[]>(url)
        .then((response) => response.data);

};

export { getRepo, getLanguages };