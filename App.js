import React from "react";
import Movies from "./movies";
import "./styles.css";

export default function App() {
  const [initialMovies, setMovies] = React.useState([
    {
      name: "Zindagi na milegi dubaara",
      type: "Bollywood",
      rating: "8.0",
      cast: "HR, farhan",
      isLiked: false,
      id: 1
    },
    {
      name: "madari",
      type: "Bollywood",
      rating: "8.5",
      cast: "HR, farhan",
      isLiked: false,
      id: 2
    },
    {
      name: "Swadesh",
      type: "Bollywood",
      rating: "9.0",
      cast: "SRK",
      isLiked: false,
      id: 3
    },
    {
      name: "Bahubali",
      type: "Tollywood",
      rating: "8.8",
      cast: "Suhaas",
      isLiked: false,
      id: 4
    }
  ]);

  const handleDelete = (id) => {
    // console.log("deleting");
    const newObjArr = initialMovies.filter((movie) => movie.id !== id);
    setMovies(newObjArr);
  };

  const likeMovie = (id) => {
    // console.log("Liking Image");
    const copiedEle = [initialMovies[id - 1]];
    copiedEle.isLiked = true;

    initialMovies[id - 1].isLiked = copiedEle.isLiked;

    setMovies(initialMovies);
  };

  const movieJSX = initialMovies.map((movie) => (
    <Movies
      movie={movie}
      key={movie.name}
      id={movie.id}
      onDelete={handleDelete}
      isLiked={movie.isLiked}
      doLike={likeMovie}
    />
  ));

  return (
    <>
      {initialMovies.length > 0 ? (
        movieJSX
      ) : (
        <div>"Sorry, The List is Empty now"</div>
      )}
    </>
  );
}
