import React, { Component } from 'react';

import {
  Container,
  OrderNumber,
  OrderDate,
  OrderTotal,
} from './styles';

export default class OrderCard extends Component {
  state = {}

  render() {
    const { order } = this.props;
    return (
      <Container>
        <OrderNumber>Pedido #{order.id}</OrderNumber>
        <OrderDate>{order.date}</OrderDate>
        <OrderTotal>R$ {order.total}</OrderTotal>
      </Container>
    );
  }
}
