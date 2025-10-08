import MovieItem from './MovieItem' //imports content from MovieItem component

const Movies = (props) => {
    return props.myMovies.map(
        (movie) => {
            return <MovieItem myMovie = {movie}></MovieItem>
        }
    ); //iterate through the movie array and pass each movie as props to the MovieItem component.
}

export default Movies //marks component for export