import React, { Component } from 'react'; 
import { Form, Item, Label, Input } from 'native-base';
import { View, Text, Image } from 'react-native';

export default class UrlSearch  extends Component {
  constructor(props){
    super();
  }
  render() {
    return ( 
      <View style={{backgroundColor: '#cce6ff'}}>
        <Form>
          <Item floatingLabel>
            <Label> Search </Label>
            <Input/>
          </Item>
        </Form>
      </View>
    )
  }
}
