import React from 'react';
import { StyleSheet, View } from 'react-native';
import addStore from './store/addStore';
import { MoodLevelSelectScreen } from './screen/MoodLevelSelectScreen';
import { FeelingSelectScreen } from './screen/FeelingsSelectScreen';
import { CommentScreen } from './screen/CommentScreen';

const App = () => (
  <View style={styles.container}>
     <MoodLevelSelectScreen />
     {/*<FeelingSelectScreen />*/}
    {/*<CommentScreen />*/}
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
