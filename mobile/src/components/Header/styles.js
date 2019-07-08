import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: ${props => (props.align ? 'space-between' : 'flex-start')};
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: left;
  font-weight: bold;
  margin-left: 10px;
`;

export const HeaderIcon = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
  activeOpacity: 0.6,
})``;

export const IconView = styled.View`
  background-color: #e5293e;
  height: 35px;
  width: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const Background = styled.ImageBackground`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 150px;
`;
