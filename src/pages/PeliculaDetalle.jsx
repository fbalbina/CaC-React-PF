import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { get } from "../utils/httpCliente";
import "./PeliculaDetalle.css";
import {Spinner} from "../Components/Spinner";

export const PeliculaDetalle = () => {
    const {peliculaId} = useParams();

    const [cargando, setCargando] = useState(true);

    const [pelicula,setPelicula] = useState(null)

    useEffect(()=>{
        setCargando(true);
        get(`/movie/${peliculaId}`).then((data)=>{
            setPelicula(data);
            setCargando(false);
        })
    },[peliculaId])

    if(cargando){
        return <Spinner/>
    }

    const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;

    //1 creación variable q toma poster de la peli
    const backgroundStyle = {
        backgroundImage: `url(${imgURL})`,
      };

    return(
        <div className="contenedorDetalle" style={backgroundStyle}> {/* 2 aplicac de la variable en contenedor */}
            <img class="col" src={imgURL} alt={pelicula.title} />
            <div className="peliculaDetalle col">
            <p className="item">
                <strong>Título: </strong>
                {pelicula.title}
            </p>
            <p>
                <strong>Géneros: </strong>
                {pelicula.genres.map((genre)=>genre.name).join(", ")}
            </p>
            <p>
                <strong>Descripción: </strong>
                {pelicula.overview}
            </p>
        </div>
        </div>
    )
}