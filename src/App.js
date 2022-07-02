import React from "react";
import {HomePage} from "./HomePage/HomePage";
import {MoviePreview} from "./MoviePreview/MoviePreview";
import { Routes, Route} from 'react-router-dom'
import "antd/dist/antd.css";


const App = function () {
  
  return (
    <div>

  
     <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/:Id" element={ <MoviePreview/> } />
       
      </Routes>

    
     
    
    
    </div>
  );
};

export default App;
