import React from 'react'
import UserList from './UserList'
import UserForm from './UserForm'

const App = ({users, isFetching, error, onAddUser}) => {

  return (
    <div className="App">
      <UserList users={users} isFetching={isFetching} />
      <br />
      <UserForm onSubmit={onAddUser} error={error} />
    </div>
  )

}

export default App
