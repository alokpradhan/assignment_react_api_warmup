import React from 'react'
import UserCard from './UserCard'

const UserList = ({users, isFetching, onRemoveUser}) => {

    const userList = users.map(user => 
      <UserCard user={user} key={user.id} onRemoveUser={onRemoveUser} />
    )

    return(
      <div className="container">
        <h1>User List</h1>
        <div className="card-group">
          {isFetching ? <p>Loading...</p> : userList}
        </div>
      </div>
    )

}

export default UserList