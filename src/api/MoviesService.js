import axios from 'axios';

const API_KEY = 'a39950dd8a28a8405e92e6b02b69cd95';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
    static getMovies(){
        return axios(withBaseUrl('movie/popular'));
    }

    static getMovieById(id){
        return axios(withBaseUrl(`movie/${id}`));
    }
}