const path = 'https://api.github.com/repos/mandrilla34'; // API

const headers: RequestInit = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
};

function getRepo(nomeRepo: string) {
    return fetch(`${path}/${nomeRepo}`, headers) // fetch é mais simples mas não é recomendado por questão de segurança
        .then((response) => response.json());
}

export { getRepo };