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

  render(){
    return (
      <App onAddUser={this.onAddUser} {...this.state} />
    ) 
  }

}

export default AppContainer
