import React, { Fragment } from "react";
import Search from "../users/search";
import Users from "../users/Users";
//Permet d'éclaircir le code d'app.js

const Home = () => (
  <Fragment>
    <Search />
    <Users />
  </Fragment>
);

export default Home;
