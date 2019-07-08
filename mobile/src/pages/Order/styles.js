import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const FormContainer = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const Address = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  shadowColor: '#000',
  shadowOffSet: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.3,
  shadowRadius: 3.83,
  elevation: 5,

})`
  background-color: #fff;
  border-radius: 5px;
  font-size:15px;
  letter-spacing:0;
  text-align:left;

  margin-bottom: 10px;
  padding: 0 20px;

  height: 45px;
  width: 100%;
`;

export const Notes = styled(Input)`
  height: 150px;
  padding: 20px;
`;
export const Cep = styled(Input)``;

export const Street = styled(Input)`
  flex-basis: 70%;
  margin-right: 10px;
`;
export const Number = styled(Input)`
  flex: 1;
`;

export const District = styled(Input)``;

export const OrderButtonContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const OrderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  margin-top: 10px;
  padding: 0 20px;
  width: 150px;
  height: 35px;
  background-color: #E5293E;
  border-radius: 50px;
  align-items: flex-start;
  justify-content: center;
`;

export const OrderButtonText = styled.Text`
  font-size:14px;
  color:#ffffff;
  letter-spacing:0;
  text-align: center;
  font-weight: bold;
`;
