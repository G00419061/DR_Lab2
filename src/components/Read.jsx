import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "./Movies"; //imports content from Movies component

const Read = () => { //sets read component

    const [myMovies, setMovie] = useState([]);

    //React hook to excute code on change 
    useEffect(
        ()=>{
            //do some http client work
            axios.get('https://data-rep-mern-application.github.io/dataserver/movies.json') //gets data down from API
            .then((response)=>{
                console.log(response.myArray)//response to console log if data successfully returned
                setMovie(response.data.myArray)//displays data to page if successfully returned
            })
            .catch((error)=>{console.log(error)});//response to console log if data not successfully returned
        },[]
    ); 

    return (
        <div>
            <h3>Hello from the Read component</h3>
            <Movies myMovies = {myMovies}></Movies> 
        </div> //retuns movie data to other .jsx pages
    );
}

export default Read; //marks component for export