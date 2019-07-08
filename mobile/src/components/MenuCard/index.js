import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import pizza from '~/images/Pizzas/1.png';

import {
  Container,
  InfoContainer,
  Title,
  Description,
  Time,
  Image,
  TimeContainer,
} from './styles';

const MenuCard = ({ type }) => (

  <Container>
    <Image source={pizza} />
    <InfoContainer>
      <Title>{type.title}</Title>
      <Description>{type.description}</Description>
      <TimeContainer>
        <Icon name="alarm" size={16} color="#ddd" />
        <Time>{type.time}</Time>
      </TimeContainer>

    </InfoContainer>
  </Container>
);

export default MenuCard;
