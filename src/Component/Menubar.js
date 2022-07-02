import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";
export const Nevbar = function () {
  const [Input, setInput] = useState("");
  const [movie, setmovie] = useState([]);
  let interval;
  useEffect(() => {
    interval = setTimeout(() => {
      axios
        .get(`http://www.omdbapi.com/?apikey=bacc74cf&s=${Input}`)
        .then((res) => {
          setmovie(res.data.Search);
        });
      
    }, 1000);
    
    return () => clearInterval(interval);
  }, [Input]);

  console.log(Input);
  console.log(movie);
  return (
    <>
      <div className="nevBar">
        <div></div>
        <div className="ImdbMain">
          <div className="Imdb">
            <h1>Imdb</h1>
          </div>
          <div>Menu</div>
        </div>
        <input
          value={Input}
          onChange={(e) => setInput(e.target.value)}
          className="Input"
          placeholder="search few movie  to see good result of recent movie "
        />

        <div className="commomnMain">
          <div className="commomn">Imdb pro</div>
          <div className="commomn">Watch list</div>
          <div className="commomn">Sign in</div>
        </div>
      </div>
      <div className="serchShow">
        {movie
          ? movie.map((x, ind) => {
              if (x) {
                return (
                  <Link to={`/${x.imdbID}`}>
                    <div className="serchContent">
                      <div className="serchContentImage">
                        <img src={x.Poster} />
                      </div>
                      <div className="serchContentText">
                        <h1>{x.Title}</h1>
                        <h3>{x.Year}</h3>
                        <h3>{x.Type}</h3>
                      </div>
                    </div>
                  </Link>
                );
              }
            })
          : null}
      </div>
    </>
  );
};
