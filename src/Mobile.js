import React from "react";
import UpperMobile from "./UpperMobile";
import LowerMobile from "./LowerMobile";

class Mobile extends React.Component {
  constructor() {
    super();

    this.state = {
      MenuState: {
        MainMenu: true,
        CoverFlow: false,
        Music: false,
        Games: false,
        Settings: false,
        AllSongs: false,
      },

      play: true,
    };
  }

  clickedCoverFlow = () => {
    this.setState({ MenuState: { MainMenu: false, CoverFlow: true } });
  };

  clickedMusic = () => {
    this.setState({ MenuState: { MainMenu: false, Music: true } });
  };
  clickedGames = () => {
    this.setState({ MenuState: { MainMenu: false, Games: true } });
  };
  //   clickedSettings = () => {
  //     this.setState({ MainMenu: false, Settings: true });
  //   };
  clickedSettings = () => {
    this.setState({ MenuState: { MainMenu: false, Settings: true } });
  };

  clickedMenu = () => {
    var obj = this.state.MenuState;
    Object.keys(obj).forEach((key) => {
      obj[key] = false;
    });
    obj["MainMenu"] = true;

    this.setState({ MainState: obj });
  };

  clickedMiddle = () => {
    if (this.state.MenuState.MainMenu == true) {
      var index = Array.from(document.getElementsByTagName("li")).indexOf(
        document.getElementsByClassName("active")[0]
      );
      const firstKey = Object.keys(this.state.MenuState)[index + 1];
      var obj = this.state.MenuState;
      Object.keys(obj).forEach((key) => {
        obj[key] = false;
      });
      obj[firstKey] = true;

      this.setState({ MenuState: obj });
    }
    if (this.state.MenuState.Music == true) {
      var index = Array.from(document.getElementsByTagName("li")).indexOf(
        document.getElementsByClassName("active")[0]
      );
      if (index == 0) {
        var obj = this.state.MenuState;
        obj["AllSongs"] = true;
        obj["Music"] = false;
        this.setState({ MenuState: obj });
      }
    }
  };

  togglePlay = () => {
    this.setState({ play: !this.state.play });
  };

  render() {
    return (
      <div className="mobile-container">
        <UpperMobile
          currentState={this.state.MenuState}
          clickedCoverFlow={this.clickedCoverFlow}
          clickedMusic={this.clickedMusic}
          clickedGames={this.clickedGames}
          clickedSettings={this.clickedSettings}
          play={this.state.play}
        />
        <LowerMobile
          clickedMenu={this.clickedMenu}
          clickedMiddle={this.clickedMiddle}
          play={this.state.play}
          togglePlay={this.togglePlay}
        />
      </div>
    );
  }
}

export default Mobile;
