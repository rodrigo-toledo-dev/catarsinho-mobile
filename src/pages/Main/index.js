import React from 'react';
import { View, Text, Image, Button, StatusBar } from 'react-native';
import GeneralBackground from '~/components/GeneralBackground';
import Logo from '~/components/Logo';
import CardProject from '~/components/CardProject';

const Main = () => {
  return (
    <GeneralBackground>
      <StatusBar barStyle="light-content" hidden={true} />
      <Logo />
      <CardProject />
      <CardProject />
      <CardProject />
      <CardProject />

    </GeneralBackground>
  );
};

export default Main;
