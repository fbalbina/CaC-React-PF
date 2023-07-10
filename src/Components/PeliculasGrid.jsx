import {get} from "../utils/httpCliente.js";
import {useState, useEffect} from "react";
import { PeliculasCard } from "./PeliculasCard";
import "./PeliculasGrid.css";
import {Spinner} from "./Spinner";
import { useQuery } from "../hooks/useQuery.jsx";

export const PeliculasGrid = () => {

    const [peliculas,setPeliculas] = useState([])
    const [cargando, setCargando] = useState(true);

    //13 utilizo useQuery() p/obtener lo q buscamos
    const query = useQuery();
    const search = query.get("search");

    useEffect (()=>{
        setCargando(true);
        //15 ternario, si hay búsqueda asigna ese valora la url, sino muestra todas las pelis
        const searchURL = search ? "/search/movie?query=" + search : "/discover/movie"

        get(searchURL).then((data)=>{
            setPeliculas(data.results);
        })        
        setCargando(false);
    },[search]) //14 agregar search

    if(cargando){
        return <Spinner/>
    }

    return(
        <ul className="moviesGrid">            
            {peliculas.map((pelicula)=>(
                <PeliculasCard key={pelicula.id} pelicula={pelicula}/>
            ))}
        </ul>
    )
}