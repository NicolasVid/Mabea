import React from "react";
import "./DisplayBa.css";
import axios from "axios";
import Greet from "../Greet/Greet";

class displayBa extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: {},
      display: true,
    };
  }

  componentDidMount () {
    this.changeBa();
  }

  changeBa = () => {
    axios
      .get("https://damp-thicket-56527.herokuapp.com/api/ba")
      .then((response) => {
          this.setState({ posts: response.data });
          sessionStorage.setItem("_id", response.data._id);
          sessionStorage.setItem("greeted", response.data.greets + 1);
          this.setState({display: true});
        })
      .catch((error) => {
        console.log(error);
      });
  };

  clickHandler = () => {
    const Authaxios = axios.create({
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem('token'),
      }
    });

    Authaxios
      .patch("https://damp-thicket-56527.herokuapp.com/api/ba/", {
        _id: sessionStorage.getItem("_id"),
        greeted: sessionStorage.getItem("greeted"),
      })
      .then((response) => {
        this.setState({display: false});
      }).catch((error) => {
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
          clickHandler={this.clickHandler}
          /> : null}
            <button onClick={this.changeBa}>Nouvelle BA</button>
        </div>
      </div>
    );
  }
}

export default displayBa;
