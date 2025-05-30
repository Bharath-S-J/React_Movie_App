import React from "react";
import '../App.css'

const MovieList = ({ movies }) => {
  const keys = Object.keys(movies[0]);
  return (
    <div className="movielist">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((item,index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.genre}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
