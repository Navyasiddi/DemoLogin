import * as actionType from './action-type';

const initialUserData = {
  name: '',
  id: '',
  gender: '',
  email: '',
  age: '',
  phoneNo: '',
};
const initialloginData = {
  username: '',
  password: '',
};

const initialState = {
  listUser: initialUserData,
  listlogin: initialloginData,
};

const handler = (currentState) => {
  const setUser = (payload) => ({...currentState, listUser: payload});
  const setLogin = (payload) => ({...currentState, listLogin: payload});

  return {
    setUser,
    setLogin,
  };
};

export default (state = initialState, action) => {
  const {payload, type} = action;
  switch (type) {
    case actionType.SET_LOGIN:
      // alert("login"+ JSON.stringify(payload));
      return handler(state).setLogin(payload);
    case actionType.LIST_USER:
      // alert("employee"+ JSON.stringify(payload));
      return handler(state).setUser(payload);

    default:
      return state;
  }
};
