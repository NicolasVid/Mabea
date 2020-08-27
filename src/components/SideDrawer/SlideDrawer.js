import React from "react";
import "./SideDrawer.css";

import { Link } from "react-router-dom";

const sideDrawer = (props) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }

  let log = "Connexion";
  let route = "/LogIn";
  if (props.isLoged) {
    log = "Deconnexion";
    route = "/";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <li onClick={props.backdropClickHandler}>
          {props.isLoged ? <Link to="/Read">Lire des BA</Link> : null}
        </li>
        {props.isLoged ? (
          <li onClick={props.backdropClickHandler}>
            <Link to="/Publish">Publier une BA</Link>
          </li>
        ) : null}
            <Link to="/Moderation">
              <li>Modérer</li>
            </Link>
        <li onClick={props.backdropClickHandler}>
          {props.isLoged ? (
            <Link to={route} onClick={props.isLogedHandler}>
              {log}
            </Link>
          ) : (
            <Link to={route}>{log}</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
