import React, { Component } from 'react';
import { Text } from 'react-native';
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
  source: { uri: props.imageSource },
}))`
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

const CardProject = (props) => (
  <ProjectView key={props.project.slug}>
    <ProjectImageView>
      <ProjectImage imageSource={props.project.image} />
    </ProjectImageView>
    <StrongText>{props.project.title}</StrongText>
    <Text>Valor a arrecadar R$ {props.project.value_to_get}</Text>
    <StrongText>Ainda falta(am)! R$ {props.project.value_missing}</StrongText>
    <ProjectLink onClick={() => {}}>
      <ProjectLinkText>Quero ajudar este projeto</ProjectLinkText>
    </ProjectLink>
  </ProjectView>
)

export default CardProject;
