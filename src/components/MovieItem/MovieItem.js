import React, { Component } from 'react';
import './MovieItem.css';
import { addMovieToList } from '../../redux/actions'
import { connect } from 'react-redux';


class MovieItem extends Component {

    addItem = (id) => {
        this.props.addFavoriteMovies(id)
    }

    render() {
        const { title, year, poster, imdbID } = this.props;

        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={poster} alt={title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{title}&nbsp;({year})</h3>
                    <button type="button" 
                            className="movie-item__add-button"
                            onClick={() => this.addItem(imdbID)}>Добавить в список</button>
                </div>
            </article>
        );
    }
}
 
function mapDispatchToProps(dispatch) {
    return {
        addFavoriteMovies: (id) => dispatch(addMovieToList(id))
    }
}
 
export default connect(null, mapDispatchToProps)(MovieItem);