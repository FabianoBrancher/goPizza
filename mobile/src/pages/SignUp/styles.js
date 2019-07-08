import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Background = styled.ImageBackground`
  flex: 1;
`;

export const Gradient = styled(LinearGradient)`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const Logo = styled.Image`
  width:72px;
  height:72px;
  background: transparent;
  margin-bottom: 25px;
`;

export const ButtonSignUp = styled.TouchableOpacity`
  background-color: #E5293E;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 10px;
  width: 100%;
`;

export const ButtonSignIn = styled.TouchableOpacity`
  margin-top: 25px;
  color: #fff;
`;

export const ButtonText = styled.Text`
  font-family:Helvetica-Bold;
  font-size:15px;
  color:#ffffff;
  letter-spacing:0;
  text-align:left;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #fff;
  border-radius: 5px;
  font-family:Helvetica;
  font-size:15px;
  letter-spacing:0;
  text-align:left;
  margin-top: 10px;
  padding: 10px 20px;
  width: 100%;
`;
