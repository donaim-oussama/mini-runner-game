import React, { Component } from "react";
import { Provider } from 'react-redux';
import Game from "./Game";
import {withInterfaceStore} from "./../shared/InterfaceStore"
import Player from "./Player";



class PlayerInterface extends Component {
    
      render() {
          console.log(this.props.history)
          console.log(this.props.user.imgUrl)

        return (
            <div>
                <Player imgPlayer = {this.props.user.imgUrl} />
                
            </div>
    


    
        );
      }
    }
    
export default withInterfaceStore(PlayerInterface);
