const initialState = {
    score: 0,
} 

export default (state = initialState, {type} = {}) => {
switch (type) {
    case 'SCORING':

    return {...state, score: state.score + 5} 

    case 'GAME_OVER':


    return initialState
    
    default:
    return state
}
}