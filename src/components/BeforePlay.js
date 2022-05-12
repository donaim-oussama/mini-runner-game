import React, { Component } from 'react';
import {withInterfaceStore} from "./../shared/InterfaceStore"
import './BeforePlay.css'

class BeforePlay extends Component {
  componentDidMount() {
    // this.props.getUsers()
    this.props.setPauseToFalse()
    // this.props.getScores()
  }

  toggleClass = () => {
    document.getElementById('choose-player').classList.toggle('wibble')
  }

  render() {
    let mappedUsers = this.props.usersArr.map(user => {
      return (
        <div key={user.user_id} onClick={() => this.props.selectUser(user.user_id)} className="user-card">
          <img src={user.imgUrl} alt=""/>
          <h2>{user.username}</h2>
        </div>
      )
    })
    
    return (
      <div className="landing">
        <h1>ENSAM RUNNER</h1>
        <h2> 
        <br/>KEEP RUNNING, DON'T STOP !</h2>
        <div className="users">{mappedUsers}</div>

        <h2 id="choose-player">CHOOSE YOUR PLAYER!</h2>
        {/*please don't put anything inside this "landing-button" div!*/} 
        <div className="landing-button">
          <h2 onClick={this.props.canPlay ? () => this.props.history.push("/game") : this.toggleClass}>PLAY</h2>
        </div>
      </div>
    );
  }
}

export default withInterfaceStore(BeforePlay);