import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/search";
import User from "./components/users/User";
import { Alert } from "./components/layout/Alert";
import { About } from "./components/pages/About";

import GithubState from "./context/github/GithubState";
//Permet de fetch des datas

const App = () => {
  const [alert, setAlert] = useState(null);

  //alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Routes>
              <Route
                path="/"
                element={
                  <Fragment>
                    <Search
                      //On passe a Search la fonctions searchUsers a Search
                      setAlert={showAlert}
                    />
                    <Users />
                  </Fragment>
                }
              />

              <Route path="/about" Component={About}></Route>
              <Route path={`/user/:login`} element={<User />} />
            </Routes>

            {/* On envoie au component users le tableau contenant TOUT les utilisateurs */}
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
