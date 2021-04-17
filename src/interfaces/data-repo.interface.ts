export default interface DataRepo {
    languages_url: string;
    name: string;
    owner: {
        avatar_url: string;
        login: string;
    };
    language: string;
    description: string;
    html_url: string;
}