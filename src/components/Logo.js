import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ViewLogo = styled.View`
  align-items: center;
  margin: 10px 0;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;


const Logo = () => {
  return (
    <ViewLogo>
      <Icon name="life-ring" size={100} color="#363636" />
      <Title>Catarsinho - O poder está conosco!</Title>
    </ViewLogo>
  );
};

export default Logo;
