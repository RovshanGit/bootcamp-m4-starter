import React, { Component } from 'react';
import './Favorites.css';
import store from '../Redux/store';
import { Link } from 'react-router-dom';

class Favorites extends Component {
    state = {
        title: 'Новый список',
        movies: []
    }
    render() { 
        return (
            <div className="favorites">
                <input value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.state.movies.map((item) => {
                        return <li key={item.id}>{item.title} ({item.year})</li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}
 
export default Favorites;