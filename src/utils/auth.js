import axios from 'axios';
import { apiUrl } from '../static/api';

export function login(username, password) {
  let credentials = { username: username, password: password}
  return axios.post(apiUrl + 'auth', credentials);
}

export function logout() {
  return axios.delete(apiUrl + 'auth');
}

export function getUser() {
  return axios.get(apiUrl + 'auth');
}