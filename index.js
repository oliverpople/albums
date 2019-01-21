import React from 'react';
import { Text, AppRegistery } from 'react-native';

const App = () => <Text>Some Text</Text>;

AppRegistery.registerComponent('albums', () => App);
