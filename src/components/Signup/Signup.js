import React, { Component } from "react";
import axios from "axios";
import "./Signup.css";
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: "",
      loading: false,
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
    this.setState({loading: true});
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/auth/signup`, this.state)
      .then((response) => {
        this.setState({ status: response.status });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        this.setState({message: "Email déjà utilisé"})
      })
      .then(() => {
        this.setState({loading: false});
      })
  };
  render() {
    if (this.state.loading)
      return <Loader />
    else if (this.state.status === 201) {
      return (
        <div className="Signed">
          <h1><span>Compte crée avec succés</span></h1>
          <Link to="/LogIn">
            <button>Se connecter</button>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="login-box">
          <h1>CRÉER UN COMPTE</h1>
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
