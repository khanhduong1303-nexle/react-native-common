/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  View,
    ScrollView,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import BigHeading from './app/components/subComponents/BigHeading'
import SmallHeading from './app/components/subComponents/SmallHeading'
import StandardText from './app/components/subComponents/StandardText'
import StandardLink from './app/components/subComponents/StandardLink'
import SubText from './app/components/subComponents/SubText'
import BoldLink from './app/components/subComponents/BoldLink'
import Button from './app/components/subComponents/Button'
import CancelButton from './app/components/subComponents/CancelButton'
import LogoutButton from './app/components/subComponents/LogoutButton'
import GroupButton from './app/components/subComponents/GroupButton'
import TabButton from './app/components/subComponents/TabButton'
import LargeFilterButton from './app/components/subComponents/LargeFilterButton'
import SmallFilterButton from './app/components/subComponents/SmallFilterButton'
import NavigateTab from './app/components/subComponents/NavigateTab'
import TextItem from './app/components/subComponents/TextItem'

export default class App extends Component<{}> {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <BigHeading/>
        <SmallHeading/>
        <StandardText/>
        <StandardLink/>
        <BoldLink/>
        <SubText/>
        <Button/>
        <CancelButton/>
        <LogoutButton/>
        <GroupButton data={['This is me', 'Parent', 'Family Member', 'Other']} onPress={(index) => alert(index)}/>
        <TabButton data={['Players', 'Volunteers']} onPress={(index) => alert(index)}/>
        <LargeFilterButton/>
        <SmallFilterButton/>
        <NavigateTab/>
        <TextItem/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
