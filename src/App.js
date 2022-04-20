import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo";

//Funzione che se presente 'Theme' nel localStorage
// returna il suo valore o di default return 'light-mode'

const getThemeMode = () => {
  console.log('---->', localStorage.getItem('theme'));
  return localStorage.getItem('theme') || 'light-mode'
}

function App() {
  const [theme, setTheme] = useState(getThemeMode());

  const cambiaTema = () => {
    if (theme === 'light-mode') {
      setTheme('dark-mode')
    } else {
      setTheme('light-mode')
    }
  }

  // Qaundo cambio il valore di theme viene cambiata anche la classe del nostro document
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <section className="section-center">
      <div className="container">
        <button className="btn" onClick={() => cambiaTema()}>Cambia</button>
        <section className="article-section">
          {
            data.map(el => <Articolo key={el.id} {...el}></Articolo>)
          }
        </section>
      </div>
    </section>
  );
}

export default App;
