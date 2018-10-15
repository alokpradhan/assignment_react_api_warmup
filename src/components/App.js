import React, { Component } from 'react';
import UserList from './UserList'

class App extends Component {

  constructor(){
    super()
    this.state = {
      users: [],
      isFetching: false
    }
  }

  componentDidMount(){
    this.setState({isFetching : true})

    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(json => {
        this.setState({
          users: json.data,
          isFetching: false
        })
      })
  }

  render() {
    const {users, isFetching} = this.state

    return (
      <div className="App">
        <UserList users={users} isFetching={isFetching} />
      </div>
    );
  }
}

export default App;
