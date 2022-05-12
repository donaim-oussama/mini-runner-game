import React from 'react'
import ObsImage from '../images/books.png'
import ObsImage2 from '../images/books.png'
import ObsImage3 from '../images/books.png'


import { connect } from 'react-redux'
import obstacle from '../reducers/obstacle'

const Obstacle = ({x, obstacles}) => {
    return (
        <div style={{position: 'relative'}}>

        {
        obstacles.map(({topWidth}, i)=>
       
        <div className={`obstacle-${i}`} key ={`obstacle-${i}`}  style={{position: "absolte"}}>
        <div style={{
            position: "absolute", 
            top: 390,
            left: x + i*topWidth, 
            width: 70,
            height: 70,
            background: `url(${ObsImage})`,  
            transition:'left 100ms'
            }}>
            
        </div>
        </div>  
        
        )}

        </div>
    )
}


const mapStateToProps = ({obstacle}) => ({x: obstacle.x, obstacles: obstacle.obstacles})
const mapDispatchToProps = {} 
 
export default connect(mapStateToProps, mapDispatchToProps)(Obstacle);
