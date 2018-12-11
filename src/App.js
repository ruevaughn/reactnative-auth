import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';

class App extends Component {
  const firebaseConfig = {
    apiKey: 'AIzaSyB0sn7mgf1LzFumYjiZ0CcdkJYX_elGeg4',
    authDomain: 'auth-1023.firebaseapp.com',
    databaseURL: 'https://auth-1023.firebaseio.com',
    projectId: 'auth-1023',
    storageBucket: 'auth-1023.appspot.com',
    messagingSenderId: '573986736114'
  };
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <Text>An app</Text>
      </View>
    )
  }
}

export default App;
