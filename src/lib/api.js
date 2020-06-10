const apiKey = '66683917a94e703e14ca150023f4ea7c'
const apiUrl = 'https://api.themoviedb.org/3/movie/popular'
const apiLocale = 'language=en-US'
let stage

export const init = (stageInstance) =>{
    stage = stageInstance;
};


/**
 * @todo:
 * call get with the correct url
 * https://api.themoviedb.org/3/movie/popular
 * and return the data
 */
export const getMovies = async()=> {
    //"?api_key=" + theMovieDb.common.api_key + "&language=" + theMovieDb.common.language;
    return get(apiUrl + "?api_key=" + apiKey + "&" + apiLocale)
};

const get = (url)=> {
    return fetch(url, {
        'Accept': 'application/json'
    }).then(response => {
        return response.json();
    })
};

