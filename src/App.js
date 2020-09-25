import React from "react";
import "./App.css";
import movies from "./fakeDb/movies";
import MovieList from "./components/MovieList";

function App() {
  return <MovieList movies={movies} />;
}

const styles = {
  movieCard: {
    display: "flex",
  },
};

export default App;
