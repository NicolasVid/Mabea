import React from "react";

const  Greet =  (props) => {

    if (props.display) {
    return (
      <div>
        <button onClick={props.clickHandler}> Féliciter </button>
      </div>
    );
    } else {
      return(
      <div></div>
      );
    }
};

export default Greet;
