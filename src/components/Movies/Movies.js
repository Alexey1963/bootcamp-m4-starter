import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { connect } from 'react-redux';

class Movies extends Component {
    
    render() { 
        const {moviesArr} = this.props

        return ( 
            <ul className="movies">
                {moviesArr.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />
                    </li>
                ))}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        moviesArr: state.movies
    }
}

export default connect(mapStateToProps, null )(Movies);