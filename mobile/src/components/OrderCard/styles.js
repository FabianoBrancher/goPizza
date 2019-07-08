import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.1,
  shadowRadius: 3.83,

  elevation: 2,
})`
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 20px;
`;

export const OrderNumber = styled.Text`


  font-size:12px;
  color:#0b2031;
  letter-spacing:0;
  text-align:left;
`;

export const OrderDate = styled.Text`
  font-size:11px;
  color:#706e7b;
  letter-spacing:0;
  line-height:14px;
  text-align:left;
`;

export const OrderTotal = styled.Text`
  font-size:16px;
  color:#0b2031;
  letter-spacing:0;
  text-align:left;
  font-weight: bold;
`;
