import React, { Component } from 'react';
import firebase from 'firebase';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
      const config = {
        apiKey: 'AIzaSyC5x601HVOhhwRwunRzaiUIYlSbSl3gyIE',
        authDomain: 'manager-8f5b0.firebaseapp.com',
        databaseURL: 'https://manager-8f5b0.firebaseio.com',
        projectId: 'manager-8f5b0',
        storageBucket: 'manager-8f5b0.appspot.com',
        messagingSenderId: '544826184266'
      };
      firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store = {createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
