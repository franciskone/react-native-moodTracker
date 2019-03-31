import React from 'react';
import { StyleSheet, View } from 'react-native';
import addStore from './store/addStore';

import AppRouter, { navigationService } from './router';
import { COLOR } from './util/constants';

const App = () => (
  <View style={styles.container}>
    <AppRouter ref={ref => navigationService.setTopLevelNavigator(ref)} />
  </View>
);

export default addStore(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: COLOR.ULTRA_LIGHT_GRAY,
  },
});
