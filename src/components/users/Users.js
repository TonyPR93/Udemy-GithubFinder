import React, { useContext } from "react";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/githubContext";
import Spinner from "../layout/Spinner";
const Users = () => {
  const githubContext = useContext(GithubContext); //Maintenant les Users seront visibles, ils viendront du context et pas de l'app (ne s'affichait pas car on avait bougé le searchUsers de app vers githubState)
  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {/* On map les utilisateurs 1 a 1 et on les envoie au component user */}
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
