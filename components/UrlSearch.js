import React, { Component } from 'react'; 
import { Form, Item, Label, Input } from 'native-base';
import { View, Text, Image } from 'react-native';
import StateEngine from '../middleware/StateEngine.js';
export default class UrlSearch  extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: 'Enter text to search',
    }
    this.cb = this.props.cb.bind(this);
    this.engine = this.props.stateEngine;
    this.editHandler = this.editHandler.bind(this);
  }

  editHandler(event) {
    console.log('Edit handler:' + this.state.searchText);
    this.engine.setSearchText(this.state.searchText);
    this.cb();
  }
  render() {
    return ( 
      <View style={{backgroundColor: '#cce6ff'}}>
        <Form>
          <Item floatingLabel>
            <Label> Search </Label>
            <Input 
              onSubmitEditing={this.editHandler}
              onChangeText={(input) => this.setState({searchText: input})}
            />
          </Item>
        </Form>
      </View>
    )
  }
}
