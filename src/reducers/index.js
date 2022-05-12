import {combineReducers} from 'redux'

import game from './game'
import player from './player'
import obstacle from './obstacle'
import foreground from './foreground'
import stats from './stats'
import input from './input'

export default combineReducers({
  game,
  player,
  obstacle, 
  foreground,
  stats,
  input

})