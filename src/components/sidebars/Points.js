import React from 'react';
import './points.css'
import { withInterfaceStore } from '../../shared/InterfaceStore';
import Stats from '../Stats';
import { Provider } from 'react-redux';
import BestPlayers from '../BestPlayers';


const Points = (props, store) => {
    return (
      <div className="points-box">
        <h2>YOU ARE {props.user.username}!</h2>
        <img  src={props.user.imgUrl} alt={props.user.username} style={{width: 80, height: 80}}/>                
        <h2 className="score-title">BestPlayers:</h2>
        <BestPlayers/>
      </div>
    );
}

export default withInterfaceStore(Points);