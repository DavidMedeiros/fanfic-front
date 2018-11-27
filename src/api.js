import axios from 'axios';

export default axios.create({
  baseURL: 'https://fanfic-api.herokuapp.com'
});