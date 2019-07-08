import React from 'react';

import Header from '~/components/Header';
import SizeCard from '~/components/SizeCard';
import { Container, SizeList } from './styles';

const icons = ['chevron-left'];

const sizes = [
  {
    id: 1,
    title: 'Gigante',
    price: 'R$76,00',
    img: require('~/images/Tamanhos/tamanho-gg.png'),
  },
  {
    id: 2,
    title: 'Grande',
    price: 'R$59,00',
    img: require('~/images/Tamanhos/tamanho-g.png'),
  },
  {
    id: 3,
    title: 'Média',
    price: 'R$42,00',
    img: require('~/images/Tamanhos/tamanho-m.png'),
  },
  {
    id: 4,
    title: 'Pequena',
    price: 'R$29,00',
    img: require('~/images/Tamanhos/tamanho-p.png'),
  },
  {
    id: 5,
    title: 'Gigante',
    price: 'R$76,00',
    img: require('~/images/Tamanhos/tamanho-gg.png'),
  },
];

const Size = () => (
  <Container>
    <Header icons={icons} title="Selecione um tamanho" />

    <SizeList
      data={sizes}
      keyExtractor={size => String(size.id)}
      renderItem={({ item: size }) => (<SizeCard key={size.id} size={size} />)}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      horizontal={false}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
    />

  </Container>
);

export default Size;
