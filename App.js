import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Constants } from 'expo';
import CameraScreen from './components/CameraScreen';
import JsonScreen from './components/JsonScreen';

const MyNavigator = TabNavigator({
  Camera: { screen: CameraScreen },
  Json: { screen: JsonScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  }
})
export default class App extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: Constants.statusBarHeight}}>
        <MyNavigator/>
      </View>
    );
  }
}