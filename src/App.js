import React from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SlideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import DisplayBa from "./components/DisplayBa/DisplayBa";
import Footer from "./components/Footer/Footer";
import BaInput from "./components/BaInput/BaInput";
import Welcome from "./components/Welcome/Welcome";
import SignUp from "./components/Signup/Signup";
import LogIn from "./components/Login/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sideDrawerOpen: false,
      isLoged: false,
      username: sessionStorage.getItem("username"),
      token: sessionStorage.getItem("token"),
    };
  }

  componentDidMount() {
    if (this.state.token != null) {
      this.setState({ isLoged: "true" });
    }
  }

  getToken = (props) => {
    this.setState({ token: props });
    sessionStorage.setItem("token", this.state.token);
  };

  getUsername = (props) => {
    this.setState({ username: props });
    sessionStorage.setItem("username", this.state.username)
  };
  
  isLogedHandler = () => {
    sessionStorage.clear();
    this.setState((prevState) => { 
      return {isLoged: !prevState.isLoged };
    });
};

  drawnerToogleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
    }
    return (
      <Router>
        <div style={{ height: "100%" }}>
          <Toolbar
            drawerClickHandler={this.drawnerToogleClickHandler}
            isLoged={this.state.isLoged}
            isLogedHandler={this.isLogedHandler}
          />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            backdropClickHandler={this.backdropClickHandler}
            isLoged={this.state.isLoged}
            isLogedHandler={this.isLogedHandler}
          />
          {backdrop}
          <main style={{ marginTop: "64px" }}>
            <Route path="/" exact component={Welcome} />
            <Route
              path="/Read"
              component={() => <DisplayBa isLoged={this.state.isLoged} />}
            />
            <Route
              path="/Publish"
              component={() => (
                <BaInput
                  username={this.state.username}
                  token={this.state.token}
                  Authaxios={this.props.Authaxios}
                />
              )}
            />
            <Route
              path="/LogIn"
              component={() => (
                <LogIn
                  isLogedHandler={this.isLogedHandler}
                  isLoged={this.state.isLoged}
                  getUsername={this.getUsername}
                  username={this.state.username}
                  getToken={this.getToken}
                />
              )}
            />
            <Route path="/SignUp" component={SignUp} />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
