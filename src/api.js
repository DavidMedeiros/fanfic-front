import axios from 'axios';

export default axios.create({
  baseURL: 'http://fanfic-api.herokuapp.com'
});