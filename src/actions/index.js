import axios from "axios";

    //Obtener peliculas destacadas
    export function getFeatured() {
        return async function(dispatch) {
            try {
                    var json = await axios.get(' https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20');
                    //obtengo un solo elemento del arreglo de manera aleatoria
                    let results = json.data? json.data.results.sort(()=> Math.random() > 0.5 ? 1 : -1).slice(0,1) : null
                    const imageUrl = 'https://image.tmdb.org/t/p/original';
                    return dispatch({
                    type: "GET_FEATURED",
                    payload: {
                        title: results[0].title,
                        image: imageUrl + results[0].backdrop_path
                    }
                    });
                }catch(error){
                console.log(error);
                }
        }
    }

    //Obtener peliculas populares
    export function getPopular() {
        return async function(dispatch) {
            try {
                    var json = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20');
                    // obtengo los primeros cuatro elementos del arreglo aleatoriamente
                    let results = json.data? json.data.results.sort(()=> Math.random() > 0.5 ? 1 : -1).slice(0,4) : null
                    return dispatch({
                    type: "GET_POPULAR",
                    payload: results
                    
                    });
                }catch(error){
                console.log(error);
                }
        }
    }