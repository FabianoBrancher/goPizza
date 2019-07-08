import React, { Component } from 'react';

import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import headerBackground from '~/images/header-background.png';

import {
  Container,
  Title,
  HeaderIcon,
  Background,
  IconView,
} from './styles';

class Header extends Component {
  state = {}

  render() {
    const { icons, title, centered } = this.props;
    return (
      <Container align={centered}>
        <Background source={headerBackground} />
        <HeaderIcon>
          <Icon name={icons[0]} size={24} color="#fff" />
        </HeaderIcon>
        <Title>{title}</Title>
        <HeaderIcon>
          {icons.length > 0 && icons[1] === 'shopping'
            ? (
              <IconView>
                <Icon name={icons[1]} size={24} color="#fff" />
              </IconView>
            ) : <Icon name={icons[1]} size={24} color="#fff" />}
        </HeaderIcon>
      </Container>
    );
  }
}

export default Header;
