export const BASE_PATH_WITHOUT_DOMAIN = '/kickbase-information';
export const SITE = 'https://senoramarillo.github.io';
// https://api.kickbase.com/competition/best?position=0 - Top 25 players

export const BUNDESLIGATABLE_API_CONFIG  = {
    BASE_URL: 'https://api.better-kickbase.workers.dev/competition/table',
    DEFAULT_OPTS: {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
};
