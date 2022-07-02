import "./MovieComponent.css";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export const MovieComponent = function () {
  const [visited, setvisited] = useState();

  useEffect(() => {
    const data = localStorage.getItem("visited");

    if (data) {
      const Movie = JSON.parse(data);
      setvisited(Object.values(Movie));
    }
  }, []);

  console.log(visited);
  return (
    
    <div   style={{display: visited ? "flex" : "none" }}  className="MovieCompepent">
      {visited
        ? visited.map((x) => {
            return (
              <Link to={`/${x.id}`}>
                
                <div className="MovieBox">
                  <div className="MovieBoxImage">
                    <img src={x.poster} />
                  </div>
                  <div>{x.title}</div>
                  <div>Runtime {x.Runtime}</div>
                  <div>Imdb Rating {x.Rating}</div>
                </div>
              </Link>
            );
          })
        : null}
    </div>
  );
};
