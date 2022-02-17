import React from "react";
import PropTypes from 'prop-types';

const Users = ({name, lastname, age, sex})=> {
    return (
        <li>
            <p>{name}</p>
            <p>{lastname}</p>
            <p>{age}</p>
            <p>{sex}</p>
        </li>
    )
}

export default Users
 
Users.prototype = {
    name:PropTypes.string,
    lastname:PropTypes.string,
    age:PropTypes.number,
    sex:PropTypes.string, 
}