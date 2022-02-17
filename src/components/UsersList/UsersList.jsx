import React from "react";
import Users from '../Users/Users';
import PropTypes from 'prop-types';

const UsersList = ({ users }) => {
    return (
        <ul>
            {users.map(user => (
                <Users
                    name={user.name}
                    lastname={user.lastname}
                    age={user.age}
                    sex={user.sex}
                />
            ))}
        </ul>
    )
}

export default UsersList

UsersList.prototype = {
    users:PropTypes.object, 
}