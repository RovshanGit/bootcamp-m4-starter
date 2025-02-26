import React, { Component } from 'react';
import './SearchBox.css';
import store from '../Redux/store'

class SearchBox extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        fetch(`https://omdbapi.com/?s=${this.state.searchLine}&apikey=9e621e58`)
            .then(response => response.json())
            .then(res => {
                console.log(res)
                store.dispatch({
                    type: "SEARCH_MOVIE",
                    payload: {
                        movies: res.Search
                    }
                })
            })
            .catch(err => {
                console.log(err)
            });
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
                            placeholder="Например, Sehirli xalat"
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
 
export default SearchBox;