const RENDER_MOVIE_LIST = 'RENDER_MOVIE_LIST'
const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST'
const REMOVE_MOVIE_FROM_LIST ='REMOVE_MOVIE_FROM_LIST'
const STORE_MOVIE_LIST_ID = 'STORE_MOVIE_LIST_ID'

function renderMovieList (list) {
    return {
        type: RENDER_MOVIE_LIST,
        payload: {
          list: list
        }  
    }
}

function addMovieToList(id) {
    return {
        type: ADD_MOVIE_TO_LIST,
        payload: {
          id: id
        }  
    }
}

function removeMovieFromList(id) {
  return {
      type: REMOVE_MOVIE_FROM_LIST,
      payload: {
        id: id
      }  
  }
}

function storeMovieListId(id) {
  return {
      type: STORE_MOVIE_LIST_ID,
      payload: {
        id: id
      }  
  }
}

export { renderMovieList, addMovieToList, removeMovieFromList, storeMovieListId, 
        RENDER_MOVIE_LIST, ADD_MOVIE_TO_LIST, REMOVE_MOVIE_FROM_LIST, STORE_MOVIE_LIST_ID }