const ADD_MOVIE_ITEM = 'ADD_MOVIE_ITEM'
// const REMOVE_GOOD_FROM_CART = 'REMOVE_GOOD_FROM_CART'

function renderMovieList (list) {
    return {
        type: ADD_MOVIE_ITEM,
        payload: {
          list: list
        }  
    }
}

// function removeGoodFromCart(id,index) {
//     return {
//         type: REMOVE_GOOD_FROM_CART,
//         payload: {
//           id: id,
//           index: index
//         }  
//     }
// }

export { renderMovieList, ADD_MOVIE_ITEM }