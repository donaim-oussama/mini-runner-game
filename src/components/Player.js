import React from "react"
import {connect} from 'react-redux'
import RunnerImage from '../images/runner.png'
import { SpriteAnimator } from 'react-sprite-animator';


const Player = ({y , imgPlayer}) => {
    
    return (
        
        <>
        <div 
            style={{
            position: 'absolute',
            top: y,
            left: 240,
            width: 95,
            height: 120,
           // background: `url(${RunnerImage})`,

   
            }}>
                         {/*transform: `rotate(${r}deg)`,
            transition: 'transform 100ms, top 300ms',*/}
             <div className="test">
      <SpriteAnimator  sprite={imgPlayer}   width={105}   height={128} startFrame={0} shouldAnimate={true} stopLastFrame={false} fps={12}/>
    </div>
            
        </div>
       
        </>
    )
}
 
const mapStateToProps = ({player}) => ({y: player.y})
const mapDispatchToProps = {}
 
export default connect(mapStateToProps, mapDispatchToProps)(Player)

