
import React from 'react';
import {

  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import RootComponent from './src/common/route-navigation';
import appReducers from './src/common/index';2
import ReduxThunk from 'redux-thunk';
const store = createStore(appReducers, {}, applyMiddleware(ReduxThunk));

function App() {
    return (
    <Provider store={store}>
      <RootComponent/>
    </Provider>
  );
};



export default App;
