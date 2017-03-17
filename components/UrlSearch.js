import React, { Component } from 'react'; 
import { Form, Item, Label, Input, Button, Grid, Col } from 'native-base';
import { View, Text, Image } from 'react-native';
import {setUvState, getUvState} from '../middleware/StateEngine.js';
export default class UrlSearch  extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: 'Enter text to search',
    }
    this.editHandler = this.editHandler.bind(this);
  }

  editHandler(event) {
    setUvState('searchInput', this.state.searchText);
    getUvState('searchFunction')();

  }
  render() {
    return ( 
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Form style={{flex: 4}}>
          <Item floatingLabel style={{backgroundColor: '#8293af',marginLeft: 10}} >
            <Label> Search </Label>
            <Input 
              onSubmitEditing={this.editHandler}
              onChangeText={(input) => this.setState({searchText: input})}
            />
          </Item>
        </Form>
        <Button style={{flex: 1}}>
          <Text>DO</Text>
        </Button>
      </View>
    )
  }
}
