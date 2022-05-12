const initialState = {
    x: 800,
    obstacles: [{ 
    topWidth:200,
    }],
  }
  
  export default (state = initialState, {type} = {}, ) => {
    switch (type) {
      case 'RUNNING':
        if (!state.obstacles.length) {
          return state
        }
  
        return {...state, x: state.x - 20}
           
      case 'GAME_OVER':
        return initialState
      
        
      case 'GENERATE':
        const topWidth = Math.round(Math.random()*400) + 800
        return {...state, obstacles: [...state.obstacles, {topWidth}]}
        case 'DELETE':
      {/*this.setState({ obstacles: this.state.obstacle.slice(1) })*/ } 
      return {...state, obstacles: [...state.obstacles.slice(1,10)]}

          //setState({ rows: state.obstacles.filter((_, i) => i !== position) }}
      default:
        return state
    }
  }