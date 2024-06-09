import React from "react";
import lightOff from "./img/lightoff.png";
import lightOn from "./img/lighton.png";

class App extends React.Component {
  constructor() {
    super();
    this.state = { isOn: false };
  }

  changeLight() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    const isOnLight = this.state.isOn;
    if (!isOnLight) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white";
    }
    return (
      <div>
        <img src={isOnLight ? lightOn : lightOff} alt="Light" />
        <button onClick={() => this.changeLight()}>
          {isOnLight ? "On" : "Off"}
        </button>
      </div>
    );
  }
}

export default App;
