import React from "react";
import "./BaInput.css";
import axios from "axios";
import { Link } from "react-router-dom";

class baInput extends React.Component {
  constructor(props) {
  super(props);
  
    this.state = {
      username: this.props.username,
      ba: "",
      status: "",
      chars_left: 300,
    };
  }

  resetStatus = () => {
    this.setState({
    status: "",
      ba: "",
    });
  };

  handleBaChange = (event) => {
    this.setState({
      ba: event.target.value,
    });
    const charCount = event.target.value.length;
    const charLeft = 300 - charCount;
    this.setState({chars_left: charLeft})
  };

  handleSumbit = (event) => {
    event.preventDefault();
    const Authaxios = axios.create({
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem('token'),
      }
    });
    Authaxios
      .post(`${process.env.REACT_APP_BASE_URL}/api/moderation`, this.state)
      .then((response) => {
        this.setState({ status: response.status });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { ba } = this.state;
    if (this.state.status === 201) {
      return (
        <div className="Share">
          <h1>Merci pour ton partage !</h1>
          <div className="Share__button">
          <Link to="/Publish">
            <button onClick={this.resetStatus}>Publier une autre BA</button>
          </Link>
          <Link to="/Read">
            <button>Lire des BA</button>
          </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Input2">
          <form onSubmit={this.handleSumbit}>
            <h1>PARTAGER VOTRE BA !</h1>
            <div className="Input2__textarea">
            <textarea
              type="text"
              placeholder="Ta bonne action..."
              value={ba}
              maxlength="300"
              onChange={this.handleBaChange}
            />
            <div className="Input2__textarea--charscount">{this.state.chars_left} / 300</div>
            </div>
            <button type="submit">Soumettre</button>
          </form>
        </div>
      );
    }
  }
}

export default baInput;
