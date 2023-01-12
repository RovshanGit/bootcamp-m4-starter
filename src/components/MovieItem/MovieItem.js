import React, { Component } from 'react';
import './MovieItem.css';
import store from '../Redux/store';

class MovieItem extends Component {
    addToFavorite(imdbID) {
        store.dispatch ({
            type: "ADD_TO_FAVORITE",
            payload: {
                imdbID: id
            }
        })
    }
    render() {
        const { title, year, poster, imdbID } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={poster} alt={title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{title}&nbsp;({year})</h3>
                    <button onClick = {()=> this.addToFavorite(imdbID) }  type="button" className="movie-item__add-button">Добавить в список</button>
                </div>
            </article>
        );
    }
}
 
export default MovieItem;