import React, { Component } from "react";

class AudioPlayer extends Component {
  state = {
    isActive: true
  };

  handleShow = () => {
    this.setState({isActive: true});
  };

  handleHide = () => {
    this.setState({isActive: false});
  };

  render() {
      return (
        <div>
          {this.state.isActive && 
            <button onClick={this.handleHide}/>
          }
           {this.state.isActive ?(
              null
           ) : 
           <div>Goodbye</div>
           }
        </div>
      )
  }
}

export default AudioPlayer;