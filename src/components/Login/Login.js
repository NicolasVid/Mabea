import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import Loader from '../Loader/Loader';

class Login extends React.Component {
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
      .post("https://damp-thicket-56527.herokuapp.com/api/auth/login", this.state)
      .then((response) => {
          this.props.getUsername(response.data.username);
          this.props.getToken(response.data.token);
          this.props.getAdmin(response.data.admin);
          this.props.isLogedHandler();
          sessionStorage.setItem("username", response.data.username);
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("admin", response.data.admin);
      })
      .catch((error) => {
        this.setState({message: "Email ou mot de passe incorrect"})
        console.log(error);
        
      })
      .then(() => {
        this.setState({loading: false});
      });
  };

  render() {
    if (this.state.loading)
      return <Loader />
    else if (!this.props.isLoged) {
      return (
        <div className="login-box">
          <h1>CONNEXION</h1>
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
                Se connecter
              </button>
            </form>
            <Link to="/signup">
              Créer un compte
            </Link>
        </div>
      );
    } else {
      return (
        <div className="Loged">
          <h1>Bienvenue,</h1>
          <h1><span>{this.props.username}</span></h1>
          <Link to="/Read">
            <button>Lire des BA</button>
          </Link>
        </div>
      );
    }
  }
}

export default Login;
