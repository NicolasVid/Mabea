import React from "react";
import axios from 'axios';

class Greet extends React.Component {

clickHandler = () => {
  axios
      .put("http://localhost:4000/api/ba")
      .then((response) => {
          console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
        <div> 
          <button onClick={this.clickHandler}> Féliciter </button>
        </div>
    );
  };
}

export default Greet;
