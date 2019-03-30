import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {MoodLevelSelectScreenPresentation} from "./screen/MoodLevelSelectScreen"

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
	      <MoodLevelSelectScreenPresentation />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
