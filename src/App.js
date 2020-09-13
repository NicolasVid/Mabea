import React from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SlideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import DisplayBa from "./components/DisplayBa/DisplayBa";
import BaInput from "./components/BaInput/BaInput";
import Welcome from "./components/Welcome/Welcome";
import SignUp from "./components/Signup/Signup";
import LogIn from "./components/Login/Login";
import Moderation from "./components/Moderation/Moderation";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sideDrawerOpen: false,
      isLoged: false,
      username: sessionStorage.getItem("username"),
      admin: sessionStorage.getItem("admin"),
      token: sessionStorage.getItem("token")
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

  getAdmin = (props) => {
    this.setState({ admin: props });
    sessionStorage.setItem("admin", this.state.admin);
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
            admin={this.state.admin}
          />
          <SideDrawer
            show={this.state.sideDrawerOpen}
            backdropClickHandler={this.backdropClickHandler}
            isLoged={this.state.isLoged}
            isLogedHandler={this.isLogedHandler}
            admin={this.state.admin}
          />
          {backdrop}
          <main style={{ marginTop: "64px" }}>
            <Route path="/" exact component={Welcome} />
            <Route
              path="/Read"
              component={() =>  (
                <DisplayBa 
                  isLoged={this.state.isLoged} 
                />
              )}
            />
            <Route
              path="/Publish"
              component={() => (
                <BaInput
                  username={this.state.username}
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
                  getAdmin={this.getAdmin}
                />
              )}
            />
            <Route path="/SignUp" component={SignUp} />
            <Route
              path="/Moderation"
              component={() => (
                <Moderation
                  
                />
              )}
            />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
