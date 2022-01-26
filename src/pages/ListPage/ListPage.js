import React, { Component } from 'react';
import './ListPage.css';
import { connect } from 'react-redux';

class ListPage extends Component {
    state = {
        api_key: 'acd003e3',
        title: '',
        movies: []
    }

    loadItems = async () => {
        const { favoriteListId: id } = this.props;
        const newMovies = [...this.state.movies]

        const res = await fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`);
        const data = await res.json();
        const listTitle = data.title

        const prArr = data.movies.map(id => {
            return fetch(`http://www.omdbapi.com/?i=${id}&apikey=${this.state.api_key}`)
            .then(res => res.json())
        })

        Promise.all(prArr)
            .then(dataArr => {
                dataArr.forEach(data => {
                    const objForPush = {
                        title: data.Title,
                        year: data.Year,
                        poster: data.Poster,
                        imdbID: data.imdbID
                    }
                    newMovies.push(objForPush)
                })
                this.setState({movies: newMovies, title: listTitle})
            })
    }

    componentDidMount() {
        this.loadItems()
    }

    render() {
        const {movies, title} = this.state
        return (
            <div className="list-page">
                <h1 className="list-page__title">{title}</h1>
                <ul>
                    {movies && movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank" rel="noopener noreferrer">{item.title} ({item.year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        favoriteListId: state.favoriteMoviesId
    }
}

export default connect(mapStateToProps, null)(ListPage);
