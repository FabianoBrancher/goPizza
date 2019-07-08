import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  shadowColor: '#000',
  shadowOffSet: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.3,
  shadowRadius: 3.83,
  elevation: 5,
})`
  flex-basis: 47%;
  align-items: center;
  justify-content: space-between;

  border-radius: 5px;
  background-color: #fff;

  height: 210px;
  margin-bottom: 20px;
  padding: 20px;
`;

export const Image = styled.Image`
  width: 135px;
  height: 135px;
`;

export const TypeText = styled.Text`
  font-size:16px;
  color:#0b2031;
  letter-spacing:0;
  text-align:center;
`;
