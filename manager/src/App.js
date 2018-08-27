import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm'
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
