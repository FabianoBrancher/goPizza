import React from 'react';

import { Image } from 'react-native';

import {
  Container,
  Title,
  Price,
  InfoContainer,
  ImageContainer,
} from './styles';

const SizeCard = ({ size }) => (

  <Container>
    <ImageContainer>
      <Image source={size.img} />
    </ImageContainer>
    <InfoContainer>
      <Title>{size.title}</Title>
      <Price>{size.price}</Price>
    </InfoContainer>
  </Container>
);

export default SizeCard;
