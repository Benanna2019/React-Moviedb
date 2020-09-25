import React, { useState } from "react";
import MovieCard from "./MovieCard";
import ReactPlayer from "react-player";

export default function MovieList({ movies }) {
  const [selected, setSelected] = useState(undefined);

  const [moviesR, setMoviesR] = useState(movies);
  //   const moviesConstant = movies;
  //   function sortMovies() {
  //     console.log("al;ksjflkasjf");
  //     setMoviesR(
  //       moviesR.sort((a, b) => {
  //         return b.Metascore - a.Metascore;
  //       })
  //     );
  //   }
  console.log(moviesR);
  return (
    <>
      <button
        onClick={() =>
          setMoviesR([...moviesR.sort((a, b) => b.Metascore - a.Metascore)])
        }
      >
        Sort
      </button>
      <div style={styles.movieContainer}>
        {moviesR.map((movie) => (
          <div style={styles.mainMovieContainer}>
            <MovieCard
              movie={movie}
              setSelected={setSelected}
              selected={selected}
              key={movie.Title}
            />
            {selected == movie.Title ? <ReactPlayer url={movie.Clip} /> : <></>}
          </div>
        ))}
      </div>
    </>
  );
}

const styles = {
  movieContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  mainMovieContainer: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
  },
};
