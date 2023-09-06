import React from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/spinner';

const Users = ({users, loading}) => {
  if (loading) {
    return <Spinner />
  }else{
    return (
      <div style={userStyle}>
        {/* On map les utilisateurs 1 a 1 et on les envoie au component user */}
        {users.map(user => (
            <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

export default Users