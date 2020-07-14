import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

class Login extends React.Component {
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
      .post("http://localhost:4000/api/auth/login", this.state)
      .then((response) => {
          this.props.getUsername(response.data.username);
          this.props.getToken(response.data.token);
          this.props.isLogedHandler();
          sessionStorage.setItem("username", response.data.username);
          sessionStorage.setItem("token", response.data.token);
          console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (!this.props.isLoged) {
      return (
        <div className="login-box">
          <h1>Connexion</h1>
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
                Se connecter
              </button>
            </form>
            <Link to="/signup">
              <h3>Créer un compte</h3>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Loged">
          <h1>Bienvenue, <br/><br/> {this.props.username}</h1>
          <Link to="/Read">
            <button>Lire des BA</button>
          </Link>
        </div>
      );
    }
  }
}

export default Login;
