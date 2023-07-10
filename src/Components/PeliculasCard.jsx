import "./PeliculasCard.css";
import {Link} from "react-router-dom";

export const PeliculasCard = ({pelicula}) => {
    const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;

    return(
        <li className="moviesCard">
            <Link to={`/pelicula/${pelicula.id}`}> 
            <img className="movieImage" src={imgURL} alt={pelicula.title} />
            <div>{pelicula.original_title}</div>
            {/* agregado de cartel con div como container*/}
            <div className="overview">
                <h3><u>Overview: </u></h3>
                <div className="subtitulos">
                <p>Puntuación: {pelicula.vote_average}</p>
                <p>Idioma Original: {pelicula.original_language}</p>
                </div>                
                {pelicula.overview}
                </div>
            </Link>            
        </li>
    )
}