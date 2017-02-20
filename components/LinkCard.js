import React, { Component } from 'react'; 
import { Container, Content, Card, CardItem, Thumbnail, logo, Header, Title,  Button, Left, Right, Body, Icon } from 'native-base';
import { Text, Image } from 'react-native';


function marty() {
   return "Whoa I asdasdasdas asd ad asd as da sd asd as da sda sd adasdasdasdasd  know javascript";
}
export default class LinkCard  extends Component {
  constructor(props){
    super();
    this.state = {
      url: 'http://www.functionalprog.com',
      marty: marty()
    }
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return ( <Card>
      <CardItem>
        <Left>
          <Thumbnail source={pic} />
          <Body>
            <Text>{this.state.url}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image style={{height: 200, width: 400, alignSelf: 'stretch'}} source={pic}/>
      </CardItem>
      <CardItem content>
        <Text>
        {this.state.marty}
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
    )
  }
}
