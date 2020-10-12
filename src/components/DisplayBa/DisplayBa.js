import React from "react";
import "./DisplayBa.css";
import axios from "axios";
import Greet from "../Greet/Greet";
import Loader from '../Loader/Loader';
import heart from '../img/heart.png';

class displayBa extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: {},
      display: true,
      loading: true,
      scale: false,
    };
  }

  componentDidMount () {
    this.changeBa();
  }

  changeBa = () => {
    this.setState({loading: true});
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/ba/`)
      .then((response) => {
          this.setState({ posts: response.data });
          sessionStorage.setItem("_id", response.data._id);
          sessionStorage.setItem("greeted", response.data.greets + 1);
          this.setState({display: true});
        })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        this.setState({loading: false});
      })
  };

  clickHandler = () => {
    const Authaxios = axios.create({
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem('token'),
      }
    });
    Authaxios
      .patch(`${process.env.REACT_APP_BASE_URL}/api/ba/`, {
        _id: sessionStorage.getItem("_id"),
        greeted: sessionStorage.getItem("greeted"),
      })
      .then((response) => {
        this.setState({display: false});
        this.scaleMyHeart();
      }).catch((error) => {
        console.log(error);
      });
  };

  scaleMyHeart = () => {
    this.setState({scale: true});
    setTimeout(() => this.setState({scale: false}), 2000);
  };

  render() {
    const { posts } = this.state;
    if (this.state.loading) 
      return <Loader />
    else
    return (
      <>
        <div className="DisplayBa">
          <p><span>{posts.ba}</span></p>
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
        <div className={this.state.scale ? "image_container--scaled" : "image_container"}>
          <img
            src={heart}
            alt='heart'
          />
        </div>
      </>
    );
  }
}

export default displayBa;
