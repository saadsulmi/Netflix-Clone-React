import { API_KEY } from "./Constants/Constants"
export const originals=`/discover/tv?api_key=${API_KEY}&with_networks=213`
export const newrelease=`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
export const toprated =`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
export const action=`/discover/movie?api_key=${API_KEY}&with_genre=28`