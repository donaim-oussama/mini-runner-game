const initialState = {
    x: 0,
    grounds: [{ 
    topWidth:200,
    }],
  }
  
  export default (state = initialState, {type} = {}) => {
    switch (type) {
      case 'RUNNING':
        return {...state, x: state.x - 20} 
      case 'GAME_OVER':
        return initialState
      default:
        return state
    }
  }