import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ListView
} from 'react-native';
import { Fab, View, Container, List,ListItem, Form, Item, Input, Label, Content, Card, CardItem, Thumbnail, logo, Header, Title,  Button, Left, Right, Body, Icon } from 'native-base';
import LinkCard from './LinkCard.js';
import UrlSearch from './UrlSearch.js';
import DataProvider from '../service/DataProvider.js';
import {setUvState, getUvState} from '../middleware/StateEngine.js';
import Seeder from '../middleware/Seeder.js';
import  Realm   from 'realm';

export default class UrlVault extends Component {

  myCb(event) {
    console.log('it worked!:' + getUvState('searchInput'));
    this.setState({urlData: []}, () => {
      records = Seeder.findRecord(this.seederDb, getUvState('searchInput'));
      console.log('--records---');
      console.log(records.length + "," + JSON.stringify(records));
      this.setState({urlData: records});
    });
  };

  myFab(event){
    console.log("FAB was clicked");
  }
  constructor(props) {
    super(props); 
    let urlData = DataProvider.getUrlData();
    let cards = [ ];
    urlData.urls.forEach((item) => {
      cards.push(<LinkCard url={item.url} detail={item.content} image={item.image} key={item.key} />)
    });
    this.seederDb =  Seeder.initDb();
    let initialRecords = Seeder.getData(this.seederDb);
    this.state = {
      cards: cards,
      urlData: initialRecords,
      active: true
    };
    this.myCb = this.myCb.bind(this);
    this.myFab = this.myFab.bind(this);
    setUvState('searchFunction', this.myCb);
  }
  render() {
    return (
      <Container>
      <View>
        <Fab
          active={this.state.active}
          direction="up"
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="share" />
          <Button style={{ backgroundColor: '#34A34F' }}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{ backgroundColor: '#3B5998' }}>
            <Icon name="logo-facebook" />
          </Button>
          <Button disabled style={{ backgroundColor: '#DD5144' }}>
            <Icon name="mail" />
          </Button>
        </Fab>
      </View>
    </Container>
    )
  }

}
