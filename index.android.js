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
import { Container,List, ListItem,Form, Item, Input, Label, Content, Card, CardItem, Thumbnail, logo, Header, Title,  Button, Left, Right, Body, Icon } from 'native-base';
import LinkCard from './components/LinkCard.js';
import UrlSearch from './components/UrlSearch.js';
import DataProvider from './service/DataProvider.js';
import {setUvState, getUvState} from './middleware/StateEngine.js';
export default class UrlVaultReactNative extends Component {
  constructor(props) {
    super(props); 
    let urlData = DataProvider.getUrlData(10);
    let cards = [ ];
    urlData.urls.forEach((item) => {
      cards.push( <LinkCard url={item.url} detail={item.content} image={item.image}  /> )
    });
    this.state = {
      cards: cards
    };
    this.myCb = this.myCb.bind(this);
    setUvState('searchFunction', this.myCb);
  }

  myCb(event) {
    console.log('it worked!:' + getUvState('searchInput'));
  }

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
        <UrlSearch  />
        <Content>
          <List>
            {this.state.cards}
          </List>
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
