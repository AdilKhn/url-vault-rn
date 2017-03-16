import React, { Component } from 'react';
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
    this.setState({ active: !this.state.active })
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
        <Fab
          active={this.state.active}
          direction="up"
          style={{ backgroundColor: '#5067FF' }}
          position="topRight"
          onPress={() => this.myFab()}
        >
          <Icon name="share" />
        </Fab>
        <Content>
          <List dataArray={this.state.urlData} renderRow = {(data) =>
            <LinkCard url={data.url} detail={data.description} image={data.image} key={data.key}/>
          }>
        </List>
      </Content>
    </Container>
    )
  }

}
