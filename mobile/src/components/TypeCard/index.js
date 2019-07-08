import React, { Component } from 'react';

import {
  Container,
  Image,
  TypeText,
} from './styles';

class TypeCard extends Component {
  state = {}

  render() {
    const { type } = this.props;
    return (
      <Container>
        <Image source={type.img} />
        <TypeText>{type.title}</TypeText>
      </Container>
    );
  }
}

export default TypeCard;
