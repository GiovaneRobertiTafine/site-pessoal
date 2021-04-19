import axios from 'axios';

const pathRepo = axios.create({
    baseURL: `https://api.github.com/repos/mandrilla34`,
});

const path = axios.create({
});

export { pathRepo, path };