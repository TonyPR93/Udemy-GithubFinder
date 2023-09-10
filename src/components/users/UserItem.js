import React from "react";
import { Link } from "react-router-dom";

// On recupere les données envoyés via le component Users
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      ></img>
      <h3>{login}</h3>

      <div>
        {/* A chaque fois qu'on cliquera, la route se chargera de display la page user */}
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          more
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
