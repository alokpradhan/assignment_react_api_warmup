import React, {Component} from 'react'
import App from '../components/App.js'
import serialize from 'form-serialize'

class AppContainer extends Component {

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

  onAddUser = (event) => {
    event.preventDefault()
    const form = event.target
    const body = serialize(form, {hash: true})

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const options = {
      headers, 
      method: 'POST',
      body: JSON.stringify(body)
    }

    this.setState({isFetching: true})

    fetch('https://reques.in/api/users', options)
      .then((response) => {
        if(!response.ok){
          throw new Error(`${response.status} ${response.statusText}`)
        }
        return response.json()
      })
      .then((json) => {
        this.setState({
          isFetching: false,
          users: [
            ...this.state.users,
            json
          ]
        }, () => {form.reset()})
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          isFetching: false,
          error
        })
      })
  }

  onRemoveUser = (userId) => {

    const header = new Headers()
    header.append('Content-type', 'application/json')

    const options = {
      header,
      method: 'DELETE'
    }

    this.setState({isFetching: true})

    fetch('https://reques.in/api/users/'+ userId, options)
      .then((response) => {
        if(!response.ok){
          throw new Error(`${response.status} ${response.statusText}`)
        }
        return response.json()
      })
      .then((json) => {
        this.setState({

          users: () => {
            let listOfUsersAfterDeletion = []
            for(let i = 0; i < this.state.users.length; i++){
              if(this.state.users[i].id !== json.id){ 
                listOfUsersAfterDeletion.push(this.state.users[i])
              }
            }
            console.log(listOfUsersAfterDeletion)
            return listOfUsersAfterDeletion
          },

          isFetching: false
        })
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          isFetching: false, 
          error
        })
      })

  }

  render(){
    return (
      <App onAddUser={this.onAddUser} onRemoveUser={this.onRemoveUser} {...this.state} />
    ) 
  }

}

export default AppContainer
