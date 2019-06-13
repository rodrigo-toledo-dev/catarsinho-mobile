import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const ProjectView = styled.View`
  background-color: #EEE;
  padding: 16px;
  align-items: center;
  margin: 0 20px;
  margin-bottom: 20px;
`;

const ProjectImageView = styled.View`
  background-color: #FFF;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ProjectImage = styled.Image.attrs(props => ({
  source: {uri: props.imageSource}
}))
`
  min-width: 150px;
  min-height: 150px;
  margin-top: 20px;
  margin-bottom: 20px;
`;


const ProjectLink = styled.TouchableOpacity`
  align-items: center;
`;

const ProjectLinkText = styled.Text`
  font-size: 16px;
  text-decoration: underline;
`;

const StrongText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;


export default class CardProject extends Component {
  render() {
    return (
      <ProjectView key={this.props.project.slug}>
        <ProjectImageView>
          <ProjectImage imageSource={this.props.project.image} />
        </ProjectImageView>
        <StrongText>{this.props.project.title}</StrongText>
        <Text>Valor a arrecadar R$ {this.props.project.value_to_get}</Text>
        <StrongText>Ainda falta(am)! R$ {this.props.project.value_missing}</StrongText>
        <ProjectLink onClick={() => {}}>
          <ProjectLinkText>Quero ajudar este projeto</ProjectLinkText>
        </ProjectLink>
      </ProjectView>
    );
  }
};
