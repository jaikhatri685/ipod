import React from "react";
import "./verticalMenu.css";

class VerticalMenu extends React.Component {
  render() {
    return (
      <div className="vertical-menu-container">
        {this.props.currentState.MainMenu && (
          <>
            <h2>iPod.js</h2>
            <ul>
              <li className="active">
                <a href="#Cover Flow">Cover Flow</a>
              </li>
              <li>
                <a href="#Music">Music</a>
              </li>

              <li>
                <a href="#Games">Games</a>
              </li>
              <li>
                <a href="#Settings">Settings</a>
              </li>
            </ul>
          </>
        )}

        {this.props.currentState.Music && (
          <>
            <h2>Music</h2>
            <ul>
              <li>
                <a href="#home">All Songs</a>
              </li>
              <li>
                <a href="#news">Artists</a>
              </li>

              <li>
                <a href="#contact">Albums</a>
              </li>
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default VerticalMenu;
