import React, { Component } from 'react';
import './Favorites.css';
import { Link } from 'react-router-dom';
import { removeMovieFromList, storeMovieListId } from '../../redux/actions'
import { connect } from 'react-redux';



class Favorites extends Component {
    state = {
        title: '',
        movies: []
    }

    changeInput = (e) => {
        this.setState({title: e.currentTarget.value})
    }

    saveMovieList = async () => {

          const { favoriteArr } = this.props;
          const { title } = this.state;
          const idsArr = favoriteArr.map((x) => x.imdbID)
          let message = {title, movies: idsArr};

          let response = await fetch('https://acb-api.algoritmika.org/api/movies/list', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(message)
          });
          
          let result = await response.json()
          this.props.storeFavoriteList(result.id)
    }

    deleteItem = (id) => {
        this.props.removeFavoriteItem(id);
    }

    render() {

        const {title}=this.state
        const {favoriteArr, favoriteListId}=this.props

        return (
            <div className="favorites">
                <input value={title} 
                        className="favorites__name"
                        placeholder="Введите название списка" 
                        onChange={this.changeInput} 
                />
                <ul className="favorites__list">
                    {favoriteArr.map((item) => {
                        return (
                        <li key={item.imdbID}>
                            <p>{item.title} ({item.year})</p>
                            <button type="button" 
                                    className="favorites__remove"
                                    onClick={() => {this.deleteItem(item.imdbID)}}
                                    >Удалить
                            </button>
                        </li>
                        )
                    })}
                </ul>
                {!favoriteListId && <button type="button" 
                        className="favorites__save"
                        onClick={this.saveMovieList}
                        >Сохранить список
                </button>}
            {favoriteListId && <Link to={`/list/:${favoriteListId}`}>Ссылка на {title}</Link>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        favoriteArr: state.favoriteMovies,
        favoriteListId: state.favoriteMoviesId
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFavoriteItem: (id) => dispatch(removeMovieFromList(id)),
        storeFavoriteList: (id) => dispatch(storeMovieListId (id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
