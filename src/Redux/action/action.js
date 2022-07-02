import {MOVIERATING,MOVIEPREVIEW }  from "../counter.types";



export const moviewRating = (data) => {
console.log(data)
    return{
        type:MOVIERATING,
        payload:{
            id : data.id,
            NewRating : data.NewRating 
        }
        
     }

};

