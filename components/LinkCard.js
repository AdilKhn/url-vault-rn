import React, { Component } from 'react'; 
import { Container, ListItem, Content, Card, CardItem, Thumbnail, logo, Header, Title,  Button, Left, Right, Body, Icon } from 'native-base';
import { Text, Image } from 'react-native';

export default class LinkCard  extends Component {
  constructor(props){
    super();
    this.state = {
      url: props.url,
      detail: props.detail,
      image: { uri: props.image }
    }
  }
  render() {
    return ( 
      <ListItem>
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={this.state.image} />
            <Body>
              <Text>{this.state.url}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image style={{height: 200, width: 400, alignSelf: 'stretch'}} source={this.state.image}/>
        </CardItem>
        <CardItem content>
          <Text>
            {this.state.detail}
          </Text>
        </CardItem>
        <CardItem header>
          <Left>
            <Button transparent>
              <Icon active name="play" />
            </Button>
          </Left>
          <Body style={{alignItems: 'stretch'}}>
            <Button transparent>
              <Icon active name="md-create" />
            </Button>
          </Body>
          <Right>
            <Button transparent>
              <Icon active name="md-trash" />
            </Button>
          </Right>
        </CardItem>
      </Card>
    </ListItem>
    )
  }
}
