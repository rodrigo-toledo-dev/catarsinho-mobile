import React, { Component } from 'react';
import api from '~/services/api';
import { StatusBar } from 'react-native';
import GeneralBackground from '~/components/GeneralBackground';
import Logo from '~/components/Logo';
import CardProject from '~/components/CardProject';

export default class Main extends Component {

  state = {
    projects: [],
  };

  async componentDidMount() {
    const response = await api.get('projects');

    this.setState({ projects: response.data });
  }

  render() {
    return (
      <GeneralBackground>
        <StatusBar barStyle="light-content" hidden={true} />
        <Logo />
        { this.state.projects.map(project => (
          <CardProject key={project.slug} project={project} />
        ))}

      </GeneralBackground>
    );
  }
};
