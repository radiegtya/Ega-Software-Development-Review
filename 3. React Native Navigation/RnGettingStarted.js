/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from './scenes/MainScreen'
import ProfileScreen from './scenes/ProfileScreen'

const BasicApp = StackNavigator({
  Main: {screen: MainScreen},
  Profile: {screen: ProfileScreen},
});

export default BasicApp
