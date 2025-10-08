import Card from 'react-bootstrap/Card'; //imports css from bootstrap

const MovieItem = (props) => {
    return (
        <div>
            <Card className="text-center"> 
                <Card.Body>
                    <Card.Title>{props.myMovie.Title}</Card.Title> 
                    <img src={props.myMovie.Poster}></img>
                    <p>{props.myMovie.Year}</p>
                    <Card.Footer></Card.Footer>
                </Card.Body>
            </Card>
        </div> //returns content in a bootstrap card
    )//returns list of movie titles, year, poster
}

export default MovieItem; //marks component for export