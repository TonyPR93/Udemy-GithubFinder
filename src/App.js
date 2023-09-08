import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/search";
import User from "./components/users/User";
import { Alert } from "./components/layout/Alert";
import { About } from "./components/pages/About";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
//Permet de fetch des datas

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Fragment>
                      <Search />
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
      </AlertState>
    </GithubState>
  );
};

export default App;
