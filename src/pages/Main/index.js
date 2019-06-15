import React, { Component } from 'react';
import { FlatList } from "react-native";
import { List, ListItem } from "react-native-elements";
import api from '~/services/api';
import GeneralBackground from '~/components/GeneralBackground';
import Logo from '~/components/Logo';
import CardProject from '~/components/CardProject';

export default class Main extends Component {

  state = {
    projects: [],
  };

  async componentWillMount() {
    // this.createSocket();
  }

  async componentDidMount() {
    const response = await api.get('projects');

    this.setState({ projects: response.data });
  }

  render() {
    return (
      <GeneralBackground>
        <Logo />
        { this.state.projects.map(project => (
          <CardProject key={project.slug} project={project} />
        ))}

      </GeneralBackground>
    );
  }
};
