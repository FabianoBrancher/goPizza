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

  height: 230px;
  margin-bottom: 20px;
  padding: 20px;
`;

export const InfoContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family:Helvetica-Bold;
  font-size:16px;
  color:#0b2031;
  letter-spacing:0;
  text-align:center;
`;

export const Price = styled.Text`
  opacity:0.6;
  font-family:Helvetica-Bold;
  font-size:16px;
  color:#0b2031;
  letter-spacing:0;
  text-align:center;
`;

export const ImageContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
