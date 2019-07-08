import React, { Component } from 'react';

import Header from '~/components/Header';
import MenuCard from '~/components/MenuCard';

import {
  Container, MenuList,
} from './styles';

const icons = ['restore-clock', 'shopping'];

const items = [
  {
    id: 1,
    title: 'Pizzas',
    description: 'Mais de 50 sabores de pizza em até 4 tamanhos diferentes de fome.',
    time: '30 mins',
  },
  {
    id: 2,
    title: 'Massas',
    description: '10 tipos de massas com diferentes molhos para te satisfazer.',
    time: '25 mins',
  },
  {
    id: 3,
    title: 'Calzones',
    description: 'Calzones super recheados com mais de 50 sabores diferentes.',
    time: '15 mins',
  },
  {
    id: 4,
    title: 'Bebidas',
    description: 'Refrigerantes, sucos, chá gelado, energéticos e água.',
    time: '5 mins',
  },
  {
    id: 5,
    title: 'Bebidas alcóolicas',
    description: 'Cervejas artesanais, vinhos e destilados.',
    time: '5 mins',
  },
];

class Menu extends Component {
  state = {}

  render() {
    return (
      <Container>
        <Header title="Pizzaria Don Juan" icons={icons} centered />
        <MenuList
          data={items}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <MenuCard key={item.id} type={item} />}
          showsVerticalScrollIndicator={false}
          horizontal={false}
        />
      </Container>
    );
  }
}

export default Menu;
