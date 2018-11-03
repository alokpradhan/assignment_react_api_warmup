import React from 'react'

const UserCard = ({user, onRemoveUser}) => {

  const {first_name, last_name, avatar, id} = user

  return(
    <div 
      className="UserCard card"
      style={{maxWidth: `128px`}}
    >
      <img 
        className="card-img-top img-fluid"
        src={avatar} 
        alt="user avatar"
      />
      <div>
        <h4>{first_name} {last_name}</h4>
        <p onClick={(e) => onRemoveUser(id)}>Delete profile</p>
      </div>
    </div>
  )
}

export default UserCard