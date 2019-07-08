import React, { Component } from 'react';

import Header from '~/components/Header';
import OrderCard from '~/components/OrderCard';

import {
  Container,
  OrderList,
} from './styles';

const orders = [
  {
    id: 1,
    date: 'Ontem às 17h',
    total: '42,00',
  },
  {
    id: 2,
    date: 'Há 1 semana',
    total: '142,00',
  },
  {
    id: 3,
    date: 'Há 2 meses',
    total: '78,00',
  },
];


class Profile extends Component {
  state = {

  }

  render() {
    return (
      <Container>
        <Header title="Meus pedidos" icons={['chevron-left']} />
        <OrderList
          data={orders}
          keyExtractor={order => String(order.id)}
          renderItem={({ item: order }) => (<OrderCard key={order.id} order={order} />)}
          showsVerticalScrollIndicator={false}
          horizontal={false}
        />
      </Container>
    );
  }
}

export default Profile;
