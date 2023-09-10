//React
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//CSS
import "./App.css";

//Layout
import Navbar from "./components/layout/Navbar";
import { Alert } from "./components/layout/Alert";

//Page
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound"; //Pour voir la difference avec {} et sans, regarder dans la declaration des routes
import { About } from "./components/pages/About";

//User page
import User from "./components/users/User";

/*State & Context
 * GithubState => les appels api et la colecte de data se fait ici
 * AlertState => Permet de declancher les alertes, (Elle est lancé dans le search, elle se lancerait dans d'autre component ou une erreur doit être déclanché)
 */
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              {/* Pour dispatch les erreurs */}
              <Alert />
              <Routes>
                {/* Homepage */}
                <Route path="/" element={<Home />} />

                {/* Page Statique about */}
                <Route path="/about" Component={About}></Route>

                {/* User page, utilise le component user */}
                <Route path={`/user/:login`} element={<User />} />

                {/* Else */}
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
