import React, { Component } from 'react';

import background from '~/images/fundo2.jpg';
import logo from '~/images/logo.png';

import {
  Background,
  Gradient,
  Container,
  Logo,
  Input,
  ButtonSignIn,
  ButtonSignUp,
  ButtonText,
} from './styles';

class SignUp extends Component {
  state = {
    fullname: '',
    username: '',
    password: '',
  }

  componentDidMount() { }

  render() {
    const { fullname, username, password } = this.state;
    const { navigation } = this.props;
    return (
      <Background source={background}>
        <Gradient colors={['rgba(0, 0, 0, .15)', 'rgba(0, 0, 0, 1)']}>
          <Container>
            <Logo source={logo} />
            <Input
              value={fullname}
              onChangeText={text => this.setState({ fullname: text })}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nome completo"
            />
            <Input
              value={username}
              onChangeText={text => this.setState({ username: text })}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Seu e-mail"
            />
            <Input
              value={password}
              onChangeText={text => this.setState({ password: text })}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Senha secreta"
            />
            <ButtonSignUp>
              <ButtonText>Criar conta</ButtonText>
            </ButtonSignUp>
            <ButtonSignIn onPress={() => navigation.navigate('SignIn')}>
              <ButtonText>Já tenho login</ButtonText>
            </ButtonSignIn>
          </Container>
        </Gradient>
      </Background>
    );
  }
}

export default SignUp;
