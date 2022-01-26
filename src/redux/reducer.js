import { RENDER_MOVIE_LIST, ADD_MOVIE_TO_LIST, REMOVE_MOVIE_FROM_LIST, STORE_MOVIE_LIST_ID } from "./actions";

const initialState = {
    movies: [],
    //     {
    //         imdbID: 'tt3896198',
    //         title: "Guardians of the Galaxy Vol. 2",
    //         year: 2017,
    //         poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"

    //     },
    //     {
    //         imdbID: 'tt0068646',
    //         title: "The Godfather",
    //         year: 1972,
    //         poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"

    //     }
    // ],
    favoriteMovies: [],
    //     { 
    //         imdbID: 'tt0068646', 
    //         title: 'The Godfather', 
    //         year: 1972 
    //     }
    // ],
    favoriteMoviesId: ''

    // cart: [1]
}

function reducer(state=initialState, action) {

    const { movies, favoriteMovies } = state;
    
    switch(action.type) {

        case RENDER_MOVIE_LIST:
            const { list } = action.payload;
            const newState = list.map((x) =>{
                return {
                    title: x.Title,
                    poster: x.Poster,
                    year: x.Year,
                    imdbID: x.imdbID
                }
            })
            return ({...state, movies: newState});
            
        case ADD_MOVIE_TO_LIST:
            const {id} = action.payload;
            const newItem = movies.find((x) => x.imdbID === id)

            if(!favoriteMovies.find((x) => x.imdbID === id)) {
                const newFavoriteMovies = [...favoriteMovies, newItem]
                return {...state, favoriteMovies: newFavoriteMovies, favoriteMoviesId: ''}
            };
            return state

        case REMOVE_MOVIE_FROM_LIST:
            const newFavoriteMovies = favoriteMovies.filter((x) => x.imdbID !== action.payload.id)
            return {...state, favoriteMovies: newFavoriteMovies, favoriteMoviesId: ''}

        case STORE_MOVIE_LIST_ID:
            return {...state, favoriteMoviesId: action.payload.id}

        default:
            
    }

    return state;
}

export default reducer;