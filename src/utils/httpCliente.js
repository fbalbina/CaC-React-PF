const API = "https://api.themoviedb.org/3";

export const get = (path) => {
    return fetch(API+path,{
        headers:{
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTljY2RhMjNmYjc2ZWIwYWFkNzZhMGVlZDI5YmU4NCIsInN1YiI6IjY0MjQzNzc1YzA0NDI5MDI5OGNkMzgxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F4sWOC4PROg-MGvAJTMfnAisuiEPSKV3PYr5kE6gj6E",
            "Content-Type": "application/json;charset=utf-8",
        }
    }).then((results)=>results.json())
}