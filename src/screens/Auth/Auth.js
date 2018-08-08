import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/DefaultInput/DefaultInput';

class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }

    render () {
        return (
            <View style={styles.container}>
                <Text>Please Log In</Text>
                <Button title='switch to Login' />
                <View style={styles.inputContainer}>
                <DefaultInput placeholder='Email adrress' style={[styles.input ,{borderColor:'brown'}] }/>
                <DefaultInput placeholder='Password' style={styles.input}/>
                <DefaultInput placeholder='confirm Password' style={styles.input}/>
                </View>
                <Button title="submit" onPress={this.loginHandler}/>
            </View>
        );
    }
}

const styles=StyleSheet.create({
  container: {
      borderWidth: 2,
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  inputContainer: {
    width: '80%'
  },
  input:{
    backgroundColor: 'white',
    borderColor: 'black'
  }
});

export default AuthScreen;
