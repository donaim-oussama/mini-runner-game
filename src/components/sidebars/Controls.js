import React from 'react';
import './controls.css'
import { withInterfaceStore } from '../../shared/InterfaceStore';

const Controls = (props) => {

    const resetGame = () => {
        props.resetSpeed()
        props.history.push("/")
        props.clearPoints()
        
    }

    return (
        <div className="controls-box">
            
            <div className="controls-text">
                <h3>IT'S ENSAM SHCOOL</h3>
                <h3>JUST KEEP RUNNING ! </h3>
                <h3>PRESS "SPACE" TO JUMP </h3>
            </div>

            <h2 className="button" onClick={resetGame}>RE-START GAME</h2>
            
        </div>
    );
}

export default withInterfaceStore(Controls);