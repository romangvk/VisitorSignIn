import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CameraScreen extends React.Component {
  static navigationOptions = {
    title: 'Camera',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>camera</Text>
        <Text>will work in the future</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
  },
});
