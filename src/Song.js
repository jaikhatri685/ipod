import React from "react";
import song from "./song.mp3";

class Song extends React.Component {
  constructor() {
    super();
    this.audio = new Audio(song);
  }

  componentDidMount() {
    this.audio.play();
    this.audio.addEventListener("ended", () => this.props.togglePlay);
  }
  componentDidUpdate() {
    this.props.play ? this.audio.play() : this.audio.pause();
  }

  componentWillUnmount() {
    this.audio.pause()
    this.audio.removeEventListener("ended", () => this.props.togglePlay);
  }

  render() {
    return (
      <div className="song-container">
        <img
          alt="song-photo"
          src="https://i.ytimg.com/vi/72agGC5b_Yo/maxresdefault.jpg"
        />
      </div>
    );
  }
}

export default Song;
