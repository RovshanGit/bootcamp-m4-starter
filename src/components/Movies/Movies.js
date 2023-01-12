import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import store from '../Redux/store';
import './Movies.css';

class Movies extends Component {
    state = { 
        movies: []
    }
    componentDidMount() {
        store.subscribe (() => {
            const storeState = store.getState();
            this.setState({ movies:storeState.movies });
        })
    }
    
    render() { 
        if(!this.state.movies) {
            return null;
        }
        return ( 
            <ul className="movies">
                {this.state.movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />
                    </li>
                ))}
            </ul>
        );
    }
}
 
export default Movies;