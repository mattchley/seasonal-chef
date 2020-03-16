import React, { useState, useEffect } from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import { PrivateRoute, PropsRoute, LoggedOutRoute } from "./components/Routes";
import LoginPage from "./pages/Login";
import LogoutFunction from "./pages/LogoutFunction";
import SignUpPage from "./pages/Signup";
import DashboardPage from "./pages/DashboardPage";
import Auth from "./utils/Auth";
import SearchV2 from './pages/Search2.0'
import { motion } from "framer-motion";
import "./nav.css";
import AddDrug from "./components/AddDrug";
import './index.css';
import PillsIcon from "./images/pillsIcon.png"

// remove tap delay, essential for MaterialUI to work properly

const App = () => {
  const [authenticated, setAuthenticate] = useState(false);

  useEffect(() => {
    toggleAuthenticateStatus();
  }, []);

  const toggleAuthenticateStatus = () => {
    // check authenticated status and toggle state based on that
    setAuthenticate(Auth.isUserAuthenticated());
  };

  return (
    <div className="body">
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>
          <div className="appBar">
            {authenticated ? (
              <div>
                <img
                  src={PillsIcon}
                  className="navTitle"
                  alt="Druggler Icon"
                  height="30px"
                  width="50px"
                  style={{ margin: "0px", marginTop: "20px" }}></img>
                <div className="navTitle" style={{ margin: "0px" }}>Druggler</div>
                <img
                  src={PillsIcon}
                  className="navTitle"
                  alt="Druggler Icon"
                  height="30px"
                  width="50px"
                  style={{ margin: "0px", marginTop: "20px" }}></img>
                <div>
                  <Link
                    className="navButton"
                    to="/logout"
                    color="error"
                  >
                    {" "}
                    Log out{" "}
                  </Link>
                </div>

                <div>
                  <Link
                    className="navButton"
                    to="/dashboard"
                  >
                    {" "}My Pills{" "}
                  </Link>
                </div>
                <div>
                  <Link
                    className="navButton"
                    to="/interactions"
                  >
                    {" "}Interactions{" "}
                  </Link>
                </div>
              </div>
            ) : (
                <div>
                  <img
                    src={PillsIcon}
                    className="navTitle"
                    alt="Druggler Icon"
                    height="30px"
                    width="50px"
                    style={{ marginTop: "20px" }}></img>
                  <div className="navTitle" >Druggler</div>
                  <img
                    src={PillsIcon}
                    className="navTitle"
                    alt="Druggler Icon"
                    height="30px"
                    width="50px"
                    style={{ marginTop: "20px" }}></img>
                </div>
              )}
          </div>
          {/* <NavSpacer /> */}

          <PropsRoute
            exact
            path="/"
            component={HomePage}
            toggleAuthenticateStatus={toggleAuthenticateStatus}
          />

          {/* <PrivateRoute path="/dashboard" component={DashboardPage} /> */}
          <PrivateRoute path="/dashboard" component={AddDrug} />
          <PrivateRoute path="/interactions" component={SearchV2} />

          {/* <PrivateRoute path="/mypills" component={AddDrug} /> */}

          <LoggedOutRoute
            path="/login"
            component={LoginPage}
            toggleAuthenticateStatus={toggleAuthenticateStatus}
          />

          <LoggedOutRoute path="/signup" component={SignUpPage} />
          <Route path="/logout" component={LogoutFunction} />
        </Router>

        {/* <div>
        <Router>
          <Switch>
            Route exact path ="/"
          </Switch>
        </Router>
      </div> */}

        {/* <Search /> */}
        {/* <AddDrug /> */}
      </MuiThemeProvider>
    </div>
  );
};

export default App;