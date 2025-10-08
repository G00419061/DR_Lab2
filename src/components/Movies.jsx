import MovieItem from './MovieItem' //imports content from MovieItem component

const Movies = (props) => {
    return props.myMovies.map(
        (movie) => {
            return <MovieItem myMovie = {movie} key={movie.imdbID}></MovieItem>; {/*add unqiue id to each movie*/}
        }
    ); //iterate through the movie array and pass each movie as props to the MovieItem component.
}

export default Movies //marks component for export