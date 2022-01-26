import React, { Component } from 'react';
import './SearchBox.css';
import { renderMovieList } from '../../redux/actions'
import { connect } from 'react-redux';

class SearchBox extends Component {

    state = {
        searchLine: '',
        api_key: 'acd003e3'
    }

    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }

    searchBoxSubmitHandler = async (e) => {

        if(e) {
            e.preventDefault();  
        }
        const {searchLine, api_key} = this.state;
        const res = await fetch(`http://www.omdbapi.com/?s=${searchLine}&apikey=${api_key}`);
        const data = await res.json()
        this.props.refreshMovies(data.Search)
    }

    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}
 
function mapDispatchToProps(dispatch) {
    return {
        refreshMovies: (list) => dispatch(renderMovieList(list))
    }
}

export default connect( null, mapDispatchToProps)(SearchBox);
