import React from 'react';
import { useState, useEffect } from 'react';
import * as api from './api';

import Filter from './components/Filter';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const [checked, setChecked] = useState(false);
  const [gender, setGender] = useState('');

  useEffect(() => {
    api.getUsers().then(({ data }) => setUsers(data));
  }, []);

  const handleClick = e => {
    const { value, checked } = e.target;
    switch (value) {
      case 'male':
        setChecked(checked);
        setGender(value);
        break;

      case 'female':
        setChecked(checked);
        setGender(value);
        break;

      default:
        break;
    }
  };

  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setFilter(value);
        break;

      case 'lastname':
        setFilter(value);
        break;

      case 'age':
        setFilter(value);
        break;
      default:
        return;
    }
  };

  const normalizeName = filter.toLowerCase();
  const ageUsers = Number(filter);

  const filterUsers = users.filter(
    user =>
      user.name.toLowerCase().includes(normalizeName) ||
      user.lastname.toLowerCase().includes(normalizeName) ||
      user.age === ageUsers,
  );

  const getFilter = () => {
    if (gender === 'male') {
      const maleFilter = users.filter(user => user.sex === 'm');
      return maleFilter;
    }
    if (gender === 'female') {
      const femaleFilter = users.filter(user => user.sex === 'f');
      return femaleFilter;
    }
  };

  return (
    <section>
      <Filter value={filter} onChange={onInputChange} onClick={handleClick} />

      {users && !checked ? ( <UsersList users={filterUsers} /> ) : ( <UsersList users={getFilter()} /> )}
    </section>
  );
}

export default App;