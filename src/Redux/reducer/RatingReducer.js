
import React from "react";

// const reducer = (state= 0 , action ) => {
//     switch(action.type){
//         case "deposite" :
//         return state + action.payload
//         case "whidraw" :
//             return state - action.payload
//           default :
//           return state  
//     }
// }

// export default reducer




const init = {
    Id: {
      total: 0,
      count: 0,
      average: 0,
      NewRating: 0,
    }
  };

export const RatingReducer = (state = init, action) => {
 
  switch (action.type) {
    
    case "Rating":
      if (state[`${action.payload.id}`]) {
        let x = state[`${action.payload.id}`];
        console.log(x,"X");
        return {
          ...state,
          [action.payload.id]: {
            total: x.total + action.payload.NewRating,
            count: x.count + 1,
            average: (( action.payload.NewRating + x.total)/(x.count + 1)) ,
            NewRating: action.payload.NewRating,
          },
        };
      } else {
          return {
              ...state ,
              [action.payload.id]:{
                total : action.payload.NewRating,
                count:1,
                average : action.payload.NewRating,
                NewRating : action.payload.NewRating
              }
          }
      }
      default :
      return state
  }
};
