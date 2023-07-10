import { LandingPage } from './pages/LandingPage';
import { PeliculaDetalle } from './pages/PeliculaDetalle';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import './App.css';
import useLocalStorage from 'use-local-storage'; //1 importac useLocalStorage

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
  //2 creación función p/cambiar modo light/dark
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (        
    <BrowserRouter>
    <div className="app" data-theme={theme}>
      <header>
        <Link to="/">
        <h1 className="title">PELÍCULAS</h1> 
        {/*3 implementac func switchTheme con button */}       
          <button onClick={switchTheme}>
            Cambiar a modo {theme === "light" ? "🌒" : "☀️"}
          </button>
      
        </Link>
      </header>
      <Routes>

        <Route path="/" element={<LandingPage/>} />
        <Route path="/pelicula/:peliculaId" element={<PeliculaDetalle/>} />

      </Routes>
      </div>
    </BrowserRouter>    
  );
}

export default App;
