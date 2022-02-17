import axios from 'axios';

axios.defaults.baseURL = 'https://venbest-test.herokuapp.com/';

export const getUsers = async () => {
  try {
    const res = await axios.get('./users');
    return res;
  } catch (error) {
    console.log(error);
  }
};