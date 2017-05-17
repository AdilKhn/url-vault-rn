import React, { Component } from 'react'; 
import { Form, Item, Label, Input, Icon, Button, Grid, Col } from 'native-base';
import { View, Text, Image } from 'react-native';
import {setUvState, getUvState} from '../middleware/StateEngine.js';
import DataProvider from '../service/DataProvider.js';

export default class UrlSearch  extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: 'Enter text to search',
    }
    this.editHandler = this.editHandler.bind(this);
    this.addUrl = this.addUrl.bind(this);
  }

  editHandler(event) {
    setUvState('searchInput', this.state.searchText);
    getUvState('searchFunction')();

  }
  addUrl(event) {
      console.log("Calling ADD for: " + this.state.searchText);
      DataProvider.getNetworkData(this.state.searchText, function(body) {
          console.log("returned from network");
          console.log(body);
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
