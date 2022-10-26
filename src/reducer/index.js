//defino mis estados globales
const initialState = {
    featured : [],
    popular: []
  }
   
  function rootReducer(state = initialState, action) {
   switch (action.type) {
  
            case "GET_FEATURED":
              return {
                ...state,
                featured : action.payload
              }
  
            case "GET_POPULAR":
              return {
                ...state,
                popular: action.payload
            }
  
            default: return state;
  
    }
  } 
  
  export default rootReducer;