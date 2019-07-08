import React, { Component } from 'react';

import Header from '~/components/Header';

import {
  Container,
  FormContainer,
  Notes,
  Cep,
  Address,
  Street,
  Number,
  District,
  OrderButton,
  OrderButtonText,
  OrderButtonContainer,
} from './styles';

export default class Order extends Component {
  state = {}

  render() {
    return (
      <Container>
        <Header title="Realizar pedido" icons={['chevron-left']} />
        <FormContainer>
          <Notes
            multiline
            textAlignVertical="top"
            underlineColorAndroid="transparent"
            placeholder="Alguma observação?" />
          <Cep placeholder="Qual seu CEP" />
          <Address>
            <Street placeholder="Rua" />
            <Number placeholder="Nº" />
          </Address>
          <District placeholder="Bairro" />

          <OrderButtonContainer>
            <OrderButton>
              <OrderButtonText>FINALIZAR</OrderButtonText>
            </OrderButton>
          </OrderButtonContainer>

        </FormContainer>

      </Container>
    );
  }
}
