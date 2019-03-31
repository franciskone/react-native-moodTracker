import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MoodLevelSelectScreenPresentation } from './screen/MoodLevelSelectScreen';
import addStore from './store/addStore';

const App = () => (
  <View style={styles.container}>
    <MoodLevelSelectScreenPresentation />
  </View>
);

export default addStore(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
