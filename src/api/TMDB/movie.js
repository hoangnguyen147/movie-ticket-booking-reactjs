import callAPi from './index';

export function getPlayingMovies(page) {
    return callAPi({
        url: `/movie/now_playing?$page=${page}`,
        method: "get",
    })
}