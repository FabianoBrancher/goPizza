import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as LoginActions } from '~/store/ducks/login';

import background from '~/images/fundo2.jpg';
import logo from '~/images/logo.png';

import api from '~/services/api';

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

class SignIn extends Component {


  state = {
    email: '',
    password: '',
  };

  handleSubmit = async () => {
    const { email, password } = this.state;
    const { loginRequest } = this.props;

    /*
      Fiquei impossibilitado de continuar

      Não consegui fazer o axios funcionar, só da Network error
      Nos outros projetos seguindo o curso, funcionam
      tentei fazer chamadas para a api do github e o erro continua
      não consegui identificar o que tem de diferente neste meu projeto
      para os exemplos que estão funcionando

      já troquei a configuração da baseUrl do axios para:
      http://localhost:3333/
      http://10.0.3.2:3333/
      http://ip_da_maquina:3333/
     **/


    try {
      const { data } = await api.post('/products');

      console.log(data);
    } catch (error) {
      console.log(error);
    }

    // loginRequest(email, password);
  }

  render() {
    const { email, password } = this.state;
    const { error, loading, navigation } = this.props;
    return (
      <Background source={background}>
        <Gradient colors={['rgba(0, 0, 0, .15)', 'rgba(0, 0, 0, 1)']}>
          <Container>
            <Logo source={logo} />
            <Input
              value={email}
              onChangeText={text => this.setState({ email: text })}
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
            <ButtonSignIn onPress={this.handleSubmit}>
              {loading
                ? <ActivityIndicator />
                : <ButtonText>Entrar</ButtonText>
              }
            </ButtonSignIn>
            <ButtonSignUp onPress={() => navigation.navigate('SignUp')}>
              <ButtonText>Criar conta gratuita</ButtonText>
            </ButtonSignUp>
          </Container>
        </Gradient>
      </Background>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.login.loading,
  error: state.login.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
