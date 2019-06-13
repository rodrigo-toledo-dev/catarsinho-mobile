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

const ProjectImage = styled.Image.attrs({
  source: {uri: 'https://storage.googleapis.com/catarsinho/vcEwbhfgZKaHQTMqgRq16fkd?GoogleAccessId=catarsinho%40catarsinho.iam.gserviceaccount.com&Expires=1560432604&Signature=YVgYbjhxwtFUg00qA5YT3FGCfUz0OCI2q7E%2FvLAm6aLWgIkiTHRIaRuqKFJiSQik%2BvRgw2TlBHnxXxutMki4lK1lUwWFFDgBem5GToUe6Hs5Y3LRfhzhn2a57g8MloyEITCMG0Ro1JoITXqJWkqEIjjytDceCTWSBNbC2353pkjKnO74ZIcns42r8L5rf8qiS6E0xpY1%2FoGpzm%2F%2F7P9YWqXmf7V0JlmB2d5Iv4DIt%2Bm5tU0AsW%2Bi%2BnMlw6X6REYCZDrpCrFkrwHXnsqu%2FjnZ5PWShXfAm0cjMLNVYRcjHqaKY4fTob%2BHZlTweY3y9RZbDQcBguItYZIlkkMFksbRLg%3D%3D&response-content-disposition=inline%3B+filename%3D%22the-witcher-iii-wild-hunt.png%22%3B+filename%2A%3DUTF-8%27%27the-witcher-iii-wild-hunt.png&response-content-type=image%2Fpng'}
})`
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
          <ProjectImage />
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
