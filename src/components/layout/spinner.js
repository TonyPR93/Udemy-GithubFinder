import React, { Fragment } from "react";
import spinner from "./spinner.gif";

//Déclaration du spinner d'attente, permet de changer le gif
const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
