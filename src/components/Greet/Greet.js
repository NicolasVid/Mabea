import React from "react";
import axios from "axios";

class Greet extends React.Component {
  clickHandler = () => {
    axios
      .patch("http://localhost:4000/api/ba/", {
        _id: sessionStorage.getItem("_id"),
        greeted: sessionStorage.getItem("greeted"),
      })
      .then((response) => {
        this.props.greetingHandler();
      }).catch((error) => {
        console.log(error);
      });
  };
  render() {
    if (this.props.display) {
    return (
      <div>
        <button onClick={this.clickHandler}> Féliciter </button>
      </div>
    );
    } else {
      return(
      <div></div>
      );
    }
  }
}

export default Greet;
