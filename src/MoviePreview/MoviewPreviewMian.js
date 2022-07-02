import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Rate } from "antd";
import Icon from "./star.png";
import { moviewRating } from "../Redux/action/action";
import { useSelector, useDispatch } from "react-redux";
const Arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const MoviewPreviewMian = function () {
  const data = useSelector((state) => state.RatingReducer);
  console.log(data);

  const dispatch = useDispatch();
  const [movie, setmovie] = useState();
  const [rate, setrate] = useState(5);
  const [newMovie, setnewMovie] = useState();
  let { Id } = useParams();

  useEffect(() => {
    if (data[`${Id}`]) {
      setnewMovie(data[`${Id}`]);
      console.log(data[`${Id}`]);
    }
  }, [data, Id]);

  useEffect(() => {
    // const  x = {

    // }
    function saveToLocalStorage(movie) {
      try {
        const data = localStorage.getItem("visited");
        if (data) {
          const serialisedState = JSON.stringify({
            ...JSON.parse(data),
            [Id]: {
              id : Id,
              title: movie.Title,
              poster: movie.Poster,
              Runtime: movie.Runtime,
              Rating: movie.imdbRating,
            },
          });
  
          localStorage.setItem("visited", serialisedState);

        }else {

          const serialisedState = JSON.stringify({
            [Id]: {
              id : Id,
              title: movie.Title,
              poster: movie.Poster,
              Runtime: movie.Runtime,
              Rating: movie.imdbRating,
            },
          });
  
          localStorage.setItem("visited", serialisedState);
        }
      } catch (e) {
        console.warn(e);
      }
    }
    saveToLocalStorage(movie);
  }, [Id, movie]);
  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=bacc74cf&i=${Id}`).then((res) => {
      setmovie(res.data);
    });

    console.log(Id);
  }, [Id]);
  console.log(newMovie);
  console.log(movie);
  const handleChange = (e) => {
    setrate(e);
    console.log(e);
    const data = {
      NewRating: e,
      id: `${Id}`,
    };
    dispatch(moviewRating(data));

    console.log(e + "soenknf");
  };
  return (
    <div className="Head">
      <div style={{color:"white"}} >
       MoviePreview
      </div>
      {movie ? (
        <div className="Main">
          <div className="Title">
            <div>{movie.Title}</div>
            <div style={{marginLeft:"50px"}} >
              Rating <Rate count={10} onChange={handleChange} value={rate} />
            </div>
          </div>
          <div className="PosterPart">
            <div className="poster">
              <div>
                <img className="Imag" src={movie.Poster} />
              </div>
            </div>
            <div className="Description">
              <div>
                <h1>Harry Potter and the Deathly Hallows: Part 1</h1>
                <h1> {movie.Runtime}</h1>
              </div>
              <div>{movie.Plot}</div>
              <div>Director: {movie.Director}</div>
              <div>Writer: {movie.Writer}</div>
            </div>
            <div className="Rating">
              {newMovie ? (
                <>
                  <div>your Reatin {newMovie.NewRating}</div>
                  <div>Average : {parseInt(newMovie.average)}</div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
