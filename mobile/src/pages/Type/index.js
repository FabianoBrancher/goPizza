import React, { Component } from 'react';

import Header from '~/components/Header';
import TypeCard from '~/components/TypeCard';

import {
  Container, TypeList,
} from './styles';


const types = [
  {
    id: 1,
    title: 'Portuguesa',
    img: require('~/images/Pizzas/1.png'),
  },
  {
    id: 2,
    title: 'Calabresa',
    img: require('~/images/Pizzas/2.png'),
  },
  {
    id: 3,
    title: 'Frango Frito',
    img: require('~/images/Pizzas/3.png'),
  },
  {
    id: 4,
    title: 'Marguerita',
    img: require('~/images/Pizzas/4.png'),
  },
  {
    id: 5,
    title: 'California',
    img: require('~/images/Pizzas/5.png'),
  },
  {
    id: 6,
    title: 'Strogonoff',
    img: require('~/images/Pizzas/6.png'),
  },
];

class Type extends Component {
  state = {}

  render() {
    return (
      <Container>
        <Header title="Selecione um tipo" icons={['chevron-left']} />
        <TypeList
          data={types}
          keyExtractor={type => String(type.id)}
          renderItem={({ item: type }) => (<TypeCard key={type.id} type={type} />)}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        />
      </Container>
    );
  }
}

export default Type;
