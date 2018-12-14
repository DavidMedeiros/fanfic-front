import axios from 'axios';
import { authUrl } from '../static/api';

export function login(username, password) {
  let credentials = { username: username, password: password}
  return axios.post(authUrl, credentials);
}

export function logout() {
  return axios.delete(authUrl);
}

export function getUser() {
  return axios.get(authUrl);
}