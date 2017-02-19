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
  Text,
  View,
  Image
} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, logo, Header, Title,  Button, Left, Right, Body, Icon } from 'native-base';
import LinkCard from './components/LinkCard.js';
export default class UrlVaultReactNative extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Url-Vault</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <LinkCard/>
          <LinkCard/>
          <LinkCard/>
          <LinkCard/>
          <LinkCard/>
        </Content>
      </Container>
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
