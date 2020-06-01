import React from "react";

const UserCard = ({ user, onRemoveUser, startEditUser }) => {
  const { first_name, last_name, avatar, id } = user;

  return (
    <div className="UserCard card" style={{ maxWidth: `128px` }}>
      <img className="card-img-top img-fluid" src={avatar} alt="user avatar" />
      <div>
        <h4>
          {first_name} {last_name}
        </h4>
        <p id="profile-action-link" onClick={e => startEditUser(user)}>
          Edit
        </p>
        <p id="profile-action-link" onClick={e => onRemoveUser(id)}>
          Delete
        </p>
      </div>
    </div>
  );
};

export default UserCard;
