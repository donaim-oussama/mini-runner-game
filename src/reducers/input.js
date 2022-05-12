const initialState = {
    username: '',
} 

export default (state = initialState, {type} = {}, {nom} = {}) => {
switch (type) {
    case 'HH':
    console.log({type})
    console.log({nom})

    console.log({username: state.username})
    return {...state, username: state.username} 

    

    case 'GAME_OVER':
    return initialState
    
    default:
        return initialState
}
}