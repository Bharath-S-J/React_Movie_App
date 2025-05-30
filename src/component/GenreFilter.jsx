import React from "react";

const GenreFilter = ({ movies, setfilterMov }) => {
  const myset = new Set();
  movies.map((item) => {
    myset.add(item.genre);
  });
  const genre = Array.from(myset);
  return (
    <div className="genreclass">
      <h2>Filter by Genre</h2>
      <div className="genrebox">
        <span
          className="genre"
          onClick={() => {
            setfilterMov(movies);
            console.log("All Genre", "is Clicked");
          }}
        >ALL Genre
        </span>
        {genre.map((item, index) => (
          <span
            className="genre"
            key={index}
            onClick={() => {
              setfilterMov(movies.filter((movie) => movie.genre === item));
              console.log(item, "is Clicked");
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;
