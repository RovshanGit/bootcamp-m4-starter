import React, { Component } from 'react';
import './ListPage.css';

class ListPage extends Component {
    state = {
        movies: [],
        savedList: ""
    }
    componentDidMount() {
        const {id} = this.props.match.params;
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
            .then(res => res.json())
            .then(res => {
                this.setState({ savedList: res.title })
                res.movies.forEach(movie => {
                    fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=9e621e58`)
                        .then(res => res.json())
                        .then(res => {
                            this.setState({ movies: [...this.state.movies, res] })
                        })
                })
            })
        // TODO: запрос к сервер на получение списка
        // TODO: запросы к серверу по всем imdbID
    }
    render() { 
        return (
            <div className="list-page">
                <h1 className="list-page__title">{this.state.savedList}</h1>
                <ul>
                    {this.state.movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={"https://www.imdb.com/title/"+ item.imdbID} target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
 
export default ListPage;