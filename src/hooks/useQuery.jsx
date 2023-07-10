import { useLocation } from "react-router-dom"; //10 importar useLocation

//12 usamos este hook p/tomar lo q viene por params
export const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}

//11 vemos en el nav lo q viaja en la url(queryparams), separamos lo q buscamos (location.search)
/* const location = useLocation();
console.log(location);
console.log(location.search); */