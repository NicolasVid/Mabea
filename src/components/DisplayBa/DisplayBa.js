import React from "react";
import "./DisplayBa.css";
import axios from "axios";
import Greet from "../Greet/Greet";

class displayBa extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: {},
      display: true
    };
  }
componentDidMount(){
  this.changeBa();
};

  changeBa = () => {
    axios
      .get("http://localhost:4000/api/ba")
      .then((response) => {
          this.setState({ posts: response.data });
          sessionStorage.setItem("_id", response.data._id);
          sessionStorage.setItem("greeted", response.data.greets + 1);
        })
      .catch((error) => {
        console.log(error);
      });
  };

  greetingHandler = () => {
    this.setState((prevState) => {
      return { display: !prevState.display };
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="BA">
        <div className="DisplayBa">
          <p>{posts.ba}</p>
        </div>
        <div className="Anonyme">
          <p>{posts.username}</p>
        </div>
        <div className="Greet">
          {this.state.display?
          posts.greets + " félicitations":
          sessionStorage.getItem('greeted') + " félicitations"
          }
          </div>
        <div className="Interaction">
          {this.props.isLoged ? 
          <Greet 
          display={this.state.display}
          greetingHandler={this.greetingHandler}
          /> : null}
            <button onClick={this.changeBa}>Nouvelle BA</button>
        </div>
      </div>
    );
  }
}

export default displayBa;
