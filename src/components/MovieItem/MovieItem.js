import React, { Component } from 'react';
import './MovieItem.css';
import store from '../Redux/store';

class MovieItem extends Component {
    addToFavorite(imdbID) {
        store.dispatch ({
            type: "ADD_TO_FAVORITE",
            payload: {
                imdbID: imdbID
            }
        })
    }
    render() {
        const { Title, Year, Poster, imdbID } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button onClick = {()=> this.addToFavorite(imdbID) } type="button" className="movie-item__add-button">Добавить в список</button>
                </div>
            </article>
        );
    }
}
 
export default MovieItem;