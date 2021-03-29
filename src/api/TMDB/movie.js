import callAPi from './index';

export function getNowPlayingMovies(page) {
    return callAPi({
        url: `/movie/now_playing?&page=${page}`,
        method: "get",
    })
}