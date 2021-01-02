import axios from 'axios';
import * as actionType from './action-type';

const setLogin = (payload) => ({
  type: actionType.SET_LOGIN,
  payload,
});

export const getLogin = () => (dispatch) =>
  new Promise((resolve) => {
    try {
      axios
        .get('http://192.168.0.105:3000/login')
        .then((response) => {
          console.log('res', response);
          //alert(response)
          dispatch(setLogin(response.data));
          resolve(response.data);
        })
        .catch((err) => {
          console.log('err', err);
        });
    } catch {
      alert('error');
    }
  });
const setUser = (payload) => ({
  type: actionType.LIST_USER,
  payload,
});

export const getUser = () => (dispatch) =>
  new Promise((resolve) => {
    try {
      axios
        .get('http://192.168.0.105:3000/empuser')
        .then((response) => {
          console.log('res', response);
          //alert(response)
          dispatch(setUser(response.data));
          resolve(response.data);
        })
        .catch((err) => {
          console.log('err', err);
        });
    } catch {
      alert('error');
    }
  });
