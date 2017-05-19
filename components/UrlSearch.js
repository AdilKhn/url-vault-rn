import React, { Component } from 'react'; 
import { Form, Item, Label, Input, Icon, Button, Grid, Col } from 'native-base';
import { View, Text, Image } from 'react-native';
import {setUvState, getUvState} from '../middleware/StateEngine.js';
import DataProvider from '../service/DataProvider.js';
import HtmlParser from '../service/HtmlParser.js';
import PouchDB from 'pouchdb-react-native';
import uuidV4 from 'uuid/v4';
export default class UrlSearch  extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: 'Enter text to search',
    }
    this.editHandler = this.editHandler.bind(this);
    this.addUrl = this.addUrl.bind(this);


    const localDb = new PouchDB('url-vault');
    const remoteDb = new PouchDB('http://192.168.1.14:5984/url-vault');
    localDb.put({
      "_id": uuidV4(),
      "url": "url-foo",
      "summary": "react summary",
      "image": "link to image"
    });
    localDb.sync(remoteDb).on('complete', function () {
        console.log("sync done");
       }).on('error', function (err) {
        console.log('error occured: ' + err);
        });
  }

  editHandler(event) {
    setUvState('searchInput', this.state.searchText);
    getUvState('searchFunction')();

  }
  addUrl(event) {
      console.log("Calling ADD for: " + this.state.searchText);
      DataProvider.getNetworkData(this.state.searchText, function(body) {
          console.log("returned from network");
          console.log(HtmlParser.getTitle(body));
          console.log(HtmlParser.getDescription(body));
          console.log(HtmlParser.getImageSrc(body));
      })
  }
  render() {
    return ( 
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Form style={{backgroundColor: '#a7c3f2',flex: 3}}>
          <Item>
            <Label>
              <Icon name="search" style={{color:'blue'}}/> 
            </Label>
            <Input 
              onSubmitEditing={this.editHandler}
              onChangeText={(input) => this.setState({searchText: input})}
            />
            <Button style={{height: 50}}
              onPress={this.addUrl}>
              <Icon name="add"/>
            </Button>
          </Item>
        </Form>
      </View>
    )
  }
}
