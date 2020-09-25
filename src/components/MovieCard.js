import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function MovieCard({ movie, setSelected, selected }) {
  //   const [watched, setWatched] = useState(false);

  function isSelected() {
    return selected == movie.Title;
  }

  function movieCollector() {
    isSelected() ? setSelected(undefined) : setSelected(movie.Title);
  }

  return (
    <div
      onClick={() => movieCollector()}
      style={isSelected() ? styles.watchedBox : styles.box}
    >
      <div style={styles.movieCard}>
        <div style={styles.image}>
          <img src={movie.Poster} width="250px" />
        </div>
        <div style={styles.info}>
          <h2>{movie.Title}</h2>
          <h4>{movie.Released}</h4>
          <h4>{movie.Runtime}</h4>
          <h4>{movie.Director}</h4>
          <p>{movie.Plot}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  box: {
    position: "relative",
    width: "400px",
    padding: "50px",
    margin: "10px",
    backgroundColor: "#fff",
    webkitBoxShadow:
      "0 0 4px rgba(0, 0, 0, 0.2) inset 0 0 50px rgba(0, 0, 0, 0.1)",
    mozBoxShadow:
      "0 0 4px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1)",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
  },
  watchedBox: {
    position: "relative",
    width: "400px",
    padding: "50px",
    margin: "10px",
    backgroundColor: "lightgreen",
    webkitBoxShadow:
      "0 0 4px rgba(0, 0, 0, 0.2) inset 0 0 50px rgba(0, 0, 0, 0.1)",
    mozBoxShadow:
      "0 0 4px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1)",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2), inset 0 0 50px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
  },
  movieCard: {
    display: "flex",
  },
  image: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  info: {
    marginLeft: "10px",
    textAlign: "center",
  },
};
