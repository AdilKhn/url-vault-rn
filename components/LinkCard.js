import React, { Component } from 'react'; 
import { Container, Content, Card, CardItem, Thumbnail, logo, Header, Title,  Button, Left, Right, Body, Icon } from 'native-base';
import { Text, Image } from 'react-native';

export default class LinkCard  extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return ( <Card>
      <CardItem>
        <Left>
          <Thumbnail source={pic} />
          <Body>
            <Text>http://www.cnn.com</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image style={{width: 350, height: 150}} source={pic}/>
      </CardItem>
      <CardItem content>
        <Text>Wait a minute. Wait a minute, Doc. Uhhh...
          Are you telling me that you built a time machine... out of a DeLorean?!
          Are you telling me that you built a time machine... out of a DeLorean?!
          Are you telling me that you built a time machine... out of a DeLorean?!
          Are you telling me that you built a time machine... out of a DeLorean?!
          Are you telling me that you built a time machine... out of a DeLorean?!
          Are you telling me that you built a time machine... out of a DeLorean?!
          Are you telling me that you built a time machine... out of a DeLorean?!
          Whoa. This is heavy.</Text>
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
