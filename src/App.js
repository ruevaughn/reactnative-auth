import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyB0sn7mgf1LzFumYjiZ0CcdkJYX_elGeg4',
      authDomain: 'auth-1023.firebaseapp.com',
      databaseURL: 'https://auth-1023.firebaseio.com',
      projectId: 'auth-1023',
      storageBucket: 'auth-1023.appspot.com',
      messagingSenderId: '573986736114'
    };

    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <LoginForm />
      </View>
    )
  }
}

export default App;
