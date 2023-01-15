import React, { Component } from 'react';
import './Favorites.css';
import store from '../Redux/store';
import { Link } from 'react-router-dom';

class Favorites extends Component {
    state = {
        title: 'Новый список',
        movies: [],
        disabled: false,
        id: "",
        value: "",
        countMovies:0
    }
    handleChange=(e)=>{
        this.setState({value: e.target.value})
    }
    deleteMovie(imdbID) {
        store.dispatch({
            type: "DELETE_MOVIE",
            payload: {
                imdbID: imdbID,
            }
        })
    }

    handleSave = (e) => {
        this.setState({ disabled: true });
        e.target.style.display = "none";
        const data = {
            "title": this.state.value,
            "movies": this.state.movies
        };
        fetch(`https://acb-api.algoritmika.org/api/movies/list `, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then((res) => this.setState({ id: res.id }))


    }
    
    componentDidMount() {
        store.subscribe (() => {
            const storeState = store.getState();
            this.setState({movies: storeState.favorites, countMovies: storeState.countMovies})
        })
    }

    render() { 
        const {value, disabled} = this.state;
        return (
            <div className="favorites">
                <input 
                    disabled={disabled} 
                    value={value} 
                    onChange={this.handleChange} 
                    placeholder="Новый список" 
                    className="favorites__name" />

                <ul className="favorites__list">
                    {this.state.movies.map((item) => 
                        (<li key={item.imdbID} className="favorites__list_items" >({item.Year}) {item.Title}
                        <button onClick={()=> this.deleteMovie(item.imdbID)}  disabled ={this.state.disabled}>X</button>
                        </li>)
                    )}
                </ul>

                {
                !this.state.disabled ? (<button type="button" onClick={this.handleSave} 
                disabled={this.state.value === "" || this.state.countMovies <= 0} className="favorites__save" >Сохранить список</button>)
                 : (<Link to={"/list/" + this.state.id} >Список филмов</Link>)
                } 
            </div>
        );
    }
}
 
export default Favorites;