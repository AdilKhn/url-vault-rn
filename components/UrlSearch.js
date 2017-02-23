import React, { Component } from 'react'; 
import { Form, Item, Label, Input } from 'native-base';
import { View, Text, Image } from 'react-native';

export default class UrlSearch  extends Component {
  constructor(props){
    super();
    this.state = {
      searchText: 'Enter text to search'  
    }
    this.editHandler = this.editHandler.bind(this);
  }

  editHandler(event) {
    console.log('Edit handler:' + this.state.searchText);
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
