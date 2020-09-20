import React, { Component } from "react";
import axios from "axios";
import "./Signup.css";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://damp-thicket-56527.herokuapp.com/api/auth/signup", this.state)
      .then((response) => {
        this.setState({ status: response.status });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        this.setState({message: "Email déjà utilisé"})
      });
  };
  render() {
    if (this.state.status === 201) {
      return (
        <div className="Signed">
          <h1>Compte crée avec succés</h1>
          <Link to="/LogIn">
            <button>Se connecter</button>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="login-box">
          <h1>Créer un compte</h1>
            <form className="login-form" onSubmit={this.handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                onChange={this.handleEmailChange}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={this.handlePasswordChange}
              />
              <div className="error-message">{this.state.message}</div>
              <button className="btn" type="submit">
                S'inscrire
              </button>
            </form>
        </div>
      );
    }
  }
}

export default Login;
