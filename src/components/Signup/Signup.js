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
      .post("http://localhost:4000/api/auth/signup", this.state)
      .then((response) => {
        this.setState({ status: response.status });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    if (this.state.status === 201) {
      return (
        <div>
          Compte crée avec succés
          <Link to="/LogIn">
            <button>Se connecter</button>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="login-box">
          <h1>Créer un compte</h1>
          <div>
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
              <button className="btn" type="submit">
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default Login;
