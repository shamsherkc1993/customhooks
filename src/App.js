import "./App.css";
import { useState } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=7267155145f551a7cbf3e5ba1bae6ede"
  );

  const { data: movies } = useFetch(url);

  return (
    <div className="App">
      <h1>app</h1>

      {movies &&
        movies.map((movie) => (
          <>
            <p>{movie.id}</p>
          </>
        ))}
    </div>
  );
}

export default App;
