import React, { Component } from "react";
import { Provider } from 'react-redux';
import Game from "./Game";
import {withInterfaceStore} from "./../shared/InterfaceStore"
import Controls from "./sidebars/Controls"
import Points from "./sidebars/Points"
import './gameDisplay.css';
import ReactHowler from 'react-howler'




class GameDisplay extends Component {
    resetGame = () => {
        this.props.resetSpeed()
        this.props.history.push("/")
        this.props.clearPoints()
      }
    
      render() {
        return (
            <>
            <ReactHowler
            src='http://www.soundimage.pl/freemusic/soundimage_player_en2.js'
            playing={true}
            />
            <div>
            <div className="game-display">
            <div className="game-display-box">
              <Controls history={this.props.history}/>
              <div className="game-square">
                <Provider store = {this.props.store}>
                      <Game history={this.props.history} username={this.props.user.username}/>
                </Provider>
              </div>
              <Points history={this.props.history}/>
            </div>
          </div>

                
            </div>
        <div>
          {matches => (
            matches ?
    
            <div className="game-display">
                <div className="game-display-box small">
                  <div className="game-square">
                    <h2 className="button restart" onClick={this.resetGame}>RE-START GAME</h2>
                    <div className="spacebar-text">
                      <p>Press </p><img src="" alt="spacebar"/><p> to pause</p>
                    </div>
                  </div>
                </div>
              </div>
    
            :
    
              <div className="game-display">
                <div className="game-display-box">
                  <div className="game-square">
                    <div className="spacebar-text">
                      <p>Press </p><img src="" alt="spacebar"/><p> to pause</p>
                    </div>
                  </div>
                </div>
              </div>
          )}
    
        </div>
        </>
    
        );
      }
    }
    
export default withInterfaceStore(GameDisplay);
