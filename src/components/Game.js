import React from 'react'
import { useEffect } from 'react'
import {connect} from 'react-redux'

import BgImage from '../images/stage1.png'
import game from '../reducers/game'
import Obstacle from './Obstacle'
import Player from './Player'
import Foreground from './Foreground'
import Stats from './Stats.js'
import { type } from '@testing-library/user-event/dist/type'
import Input from './Input'
import PlayerInterface from './PlayerInterface'

let gameLoop
let ObsGenerator




const Game = ({status, start, jump, finish, history, Yp, username, score}) => {
    let pp = {username}

    if(status === 'game-over'){
        console.log({pp})
        clearInterval(gameLoop)
        clearInterval(ObsGenerator)
    } 

    //const pp = {username}
    useEffect(() => {
        
        const handleKeyPress = (e) => {
            if (e.keyCode === 32 && Yp === 306) {
                jump()
              }
              if (status !== 'playing') {
                start(pp)
              }
        }
        document.addEventListener('keypress', handleKeyPress)

        
              
    }, [])
   

    
    return (
        <div className='canvas-wrapper'>
            <div style={{
            position:'relative',
            width: 900,
            height: 600,
            left: '0%',
           
            
            transition:'left 100ms',
            overflow: 'hidden',
            borderBlockColor: 'red'
            }} >
                <Foreground />
                <PlayerInterface />
                <Obstacle />
                <Stats username={username}/>


                
            </div>
        </div>
    )

    
}

const jump = () => {
    
        return (dispatch, getState) => {
        const {y} = getState().player
        if(y >= 306){
            dispatch({type: 'JUMP'})
        }
    }
    
}
const start = (pp) => {
    return (dispatch, getState) => {
        const {status} = getState().game 
        
        

        if(status !== 'playing'){
            gameLoop = setInterval(() => {
            dispatch({type: 'RUNNING'})
            dispatch({type: 'SCORING'})
            check(dispatch, getState, pp)
           


          }, 50)
          ObsGenerator = setInterval(() => {
            dispatch({type: 'GENERATE'})
           
            check(dispatch, getState)

          }, 2000)


         
            setInterval(() => {
                const {y} = getState().player 
                if(y < 306){
                dispatch({type: 'FALL'})
          }
                    
              }, 50)

        dispatch({type: 'START'})
    }
}
} 
const finish = () => {
    return (dispatch, getState) => {
    const state = getState()
    const sc = state.stats.score

    console.log("HHH")

    console.log({sc})
    const x = state.obstacle.x 
 

}
}
const finish2 = (dispatch, getState) => {
    const state = getState()
    const playerY = state.player.y
    const obstacles = state.obstacle.obstacles
    const x = state.obstacle.x 
    const sc = state.stats.score
    console.log({sc})

}
const check = (dispatch, getState, pp) => {
    const state = getState()
    const playerY = state.player.y
    const obstacles = state.obstacle.obstacles
    const x = state.obstacle.x 
    const sc = state.stats.score
    //console.log(sc)
    const challenge = obstacles.map(({topWidth}, i) => {
        return {
            x1: x + i*topWidth,
            y1: 390,
            
        }
    }).filter(({x1})=>
    {
        if(x1 > 0 && x1 < 900){
            return true
        }else if(x1<0){

        }

    })

    if (challenge.length) {
        const {x1, y1} = challenge[0]
        


        if (
          (x1 < 240 && 240 < x1 + 50 && playerY+137 > y1)
        ) {
            console.log('ddd')
            console.log({pp})
          dispatch({type: 'GAME_OVER'})
        }
      }



}




const mapStateToProps = ({game, player, stats}) => ({status: game.status, Yp: player.y, score: stats.score})
const mapDispatchToProps = {start,jump, finish} 
 
export default connect(mapStateToProps, mapDispatchToProps)(Game);