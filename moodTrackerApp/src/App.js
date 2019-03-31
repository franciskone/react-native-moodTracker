import React from 'react';
import { StyleSheet, View } from 'react-native';
import addStore from './store/addStore';
// import { MoodLevelSelectScreenPresentation } from './screen/MoodLevelSelectScreen';
import { FeelingSelectScreenPresentation } from './screen/FeelingsSelectScreen/FeelingSelectScreenPresentation';

const App = () => (
  <View style={styles.container}>
    <FeelingSelectScreenPresentation />
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
