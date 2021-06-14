import React from 'react';
import Movie from './Movie'

const MovieList = ({movies}) => {

    const movieNodes = movies.map( (movie) => {
        return <Movie name={movie.name} key={movie.id}><a className="App-link" href="{movie.url}">{movie.name}</a></Movie>
    })

    return (
        <div className="MovieList">
            {movieNodes}
        </div>
    )

}

export default MovieList;