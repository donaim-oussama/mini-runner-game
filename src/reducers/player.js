const initialState = {
    y: 306,
  } 
  export default (state = initialState, {type} = {}) => {
    switch (type) {
      
      case 'RUN1':

      case 'RUN2': 
      case 'RUN3': 
      case 'RUN4':


      case 'JUMP':
        return {...state, y: state.y - 137} 

    
      case 'FALL':
        return {...state, y: state.y + 10}
      
      case 'GAME_OVER':
        return initialState

      
      default:
        return state
    }
  }