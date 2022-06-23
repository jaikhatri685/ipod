import React from "react";
import fastForward from "./fast-forward-button.png";
import fastBackward from "./rewind-button.png";
import playPauseButton from "./play-and-pause-button.png";

class LowerMobile extends React.Component {
  render() {
    return (
      <div className="lower-mobile">
        <div className="outer-wheel">
          <div className="menu" onClick={this.props.clickedMenu}>
            Menu
          </div>
          <div className="fast-forward-btn">
            <img alt="fast-forward-button" src={fastForward} />
          </div>
          <div className="rewind-btn">
            <img alt="rewind-button" src={fastBackward} />
          </div>
          <div className="play-pause-btn" onClick={this.props.togglePlay}>
            <img alt="play-pause-button" src={playPauseButton} />
          </div>
        </div>

        <div className="inner-wheel" onClick={this.props.clickedMiddle}></div>
      </div>
    );
  }
}

export default LowerMobile;
