import React, { useEffect } from "react";
import CoverFlowImage from "./coverflow.jpg";
import GamesImage from "./game.jpg";
import SettingsImage from "./settings.png";
import VerticalMenu from "./VerticalMenu";
import ZingTouch from "zingtouch";
import Song from "./Song.js";
const UpperMobile = (props) => {
  useEffect(() => {
    function temp() {
      var angle = 0;
      var liElem = document.getElementsByTagName("li");
      var zt = new ZingTouch.Region(
        document.getElementsByClassName("outer-wheel")[0],
        false
      );

      var myElement = document.getElementsByClassName("outer-wheel")[0];
      zt.bind(
        myElement,
        "rotate",
        function x(e) {
          //    console.log(e.detail.angle)

          if (e.detail.distanceFromLast > 1.5) {
            // console.log(liElem);
            var length = liElem.length;
            var activeIndex = -1;
            if (document.getElementsByClassName("active")[0]) {
              activeIndex = Array.from(liElem).indexOf(
                document.getElementsByClassName("active")[0]
              );
              document
                .getElementsByClassName("active")[0]
                .classList.remove("active");
            }

            //   console.log(activeIndex);
            //   console.log(document.getElementsByClassName("active")[0]);

            liElem[(activeIndex + 1) % length].classList.add("active");
          } else if (e.detail.distanceFromLast < -1.5) {
            // console.log(liElem);
            var length = liElem.length;
            var activeIndex = -1;
            if (document.getElementsByClassName("active")[0]) {
              activeIndex = Array.from(liElem).indexOf(
                document.getElementsByClassName("active")[0]
              );
              document
                .getElementsByClassName("active")[0]
                .classList.remove("active");
            }
            //   console.log(activeIndex);
            //   console.log(document.getElementsByClassName("active")[0]);
            liElem[(activeIndex - 1 + length) % length].classList.add("active");
          }
        },

        false
      );
    }

    temp();
  }, []);

  return (
    <div className="upper-mobile">
      <VerticalMenu
        currentState={props.currentState}
        clickedCoverFlow={props.clickedCoverFlow}
        clickedMusic={props.clickedMusic}
        clickedGames={props.clickedGames}
        clickedSettings={props.clickedSettings}
      />
      { (props.currentState.MainMenu ||(props.currentState.Music && !props.currentState.AllSongs))&& (
        <img
          className="menu-image"
          src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="
        />
      )}
      {props.currentState.CoverFlow && (
        <img
          className="coverflow-image"
          alt="coverflow"
          src={CoverFlowImage}
        ></img>
      )}
      {props.currentState.Games && (
        <img className="games-image" alt="games" src={GamesImage}></img>
      )}
      {props.currentState.Settings && (
        <img
          className="settings-image"
          alt="settings"
          src={SettingsImage}
        ></img>
      )}
      {props.currentState.AllSongs && (
        <Song play={props.play} togglePlay={props.togglePlay} />
      )}
    </div>
  );
};

export default UpperMobile;
