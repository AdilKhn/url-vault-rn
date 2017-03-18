/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * use icons from here http://ionicframework.com/docs/v2/ionicons/
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import UrlVault from './components/UrlVault.js';


export default class UrlVaultReactNative extends Component {


  render() {
    return (
        <UrlVault/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('UrlVaultReactNative', () => UrlVaultReactNative);
