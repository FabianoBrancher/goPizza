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
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-right: 50px;
`;

export const Image = styled.Image`
  height: 80px;
  width: 80px;
  margin-right: 10px;
  border-radius: 5px;
`;

export const Title = styled.Text`
  color:#0b2031;
  font-size:12px;
  font-weight: bold;
  letter-spacing:0;
  margin-bottom: 5px;
  text-align:left;
`;

export const Description = styled.Text`
  font-size:11px;
  color:#706e7b;
  letter-spacing:0;
  line-height:14px;
  text-align:left;
`;

export const TimeContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

export const Time = styled.Text`
  color:#706e7b;
  font-size:10px;
  letter-spacing:0.46px;
  margin-left: 5px;
  text-align:left;
`;
