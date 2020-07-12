import React from "react";
import "./DisplayBa.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Greet from "../Greet/Greet";

class displayBa extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: {},
    };
  }

  componentDidMount() {this.changeBa()};
  changeBa = () => {
    axios
      .get("http://localhost:4000/api/ba")
      .then((response) => {
        if (response.data.display) {
          this.setState({ posts: response.data });
          sessionStorage.setItem("_id", response.data._id);
          console.log(response.data)
        } else {
            console.log(response);
            this.changeBa();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


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
          {posts.greets} félicitations
        </div>
        <div className="Interaction">
          {this.props.isLoged ? <Greet /> : null}
          <Link to="/Read">
            <button onClick={this.changeBa}>Nouvelle BA</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default displayBa;
