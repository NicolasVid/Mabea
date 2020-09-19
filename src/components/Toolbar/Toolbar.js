import React from "react";
import DrawerToogleButton from "../SideDrawer/DrawerToogleButton";
import "./Toolbar.css";
import { Link } from "react-router-dom";

const toolbar = (props) => {
  let log = "Connexion";
  let route = "/LogIn";
  if (props.isLoged) {
    log = "Deconnexion";
    route = "/";
  }

  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toolbar_toogle-button">
          <DrawerToogleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar_logo">
          <Link to="/Mabea">MABÉA</Link>
        </div>
        <div className="spacer"></div>
        <div className="toolbar_navigation-items">
          <ul>
          {props.isLoged ? (
              <Link to="/Read">
                <li>Lire des BA</li>
              </Link>
            ) : null}
            {props.isLoged ? (
              <Link to="/Publish">
                <li>Publier une BA</li>
              </Link>
            ) : null}
            {props.admin&&props.isLoged ? (
            <Link to="/Moderation">
              <li>Modérer</li>
            </Link>
            ) : null}
            {props.isLoged ? (
                <Link to={route} onClick={props.isLogedHandler}>
                <li>{log}</li>
              </Link>
            ) : (
            <Link to={route}>
              <li>{log}</li>
            </Link>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default toolbar;
