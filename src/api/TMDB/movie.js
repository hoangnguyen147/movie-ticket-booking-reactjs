import callAPi from './index';

export function getPopularMovie(page) {
    return callAPi({
        url: `/movie/popular?$page=${page}`,
        method: "get",
    })
}