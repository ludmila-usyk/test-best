import React from 'react';
import s from './Filter.module.css'
import PropTypes from 'prop-types';

const Filter = ({ name, lastname, age, onChange, onClick, checked }) => {
  
    return (
        <form className={s.form} >
            <label>
                Name
                <input
                    className={s.input}
                    name="name"
                    type="text"
                    value={name}
                    onChange={onChange}
                />
            </label>
            <label>
                lastname
                <input
                    className={s.input}
                    name="lastname"
                    type="text"
                    value={lastname}
                    onChange={onChange}
                />       
            </label>
            <label>
                Age
                <input
                    className={s.input}
                    name="age"
                    type="text"
                    value={age}
                    onChange={onChange}
                />
            </label>
            <div>
            <label>
                male
                <input
                    value="male"
                    type="checkbox"
                    onChange={onClick}
                    checked={checked}
                />
            </label>
            <label>
                female
                <input
                    value="female"
                    type="checkbox"
                    onChange={onClick}
                    checked={checked}
                />
            </label>
            </div> 
        </form>
    )  
}

export default Filter

Filter.prototype = {
    name:PropTypes.string,
    lastname:PropTypes.string,
    age:PropTypes.number,
    onChange:PropTypes.func,
    onClick:PropTypes.func,
    checked:PropTypes.bool,
}