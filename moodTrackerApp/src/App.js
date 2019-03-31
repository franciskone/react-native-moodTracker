import React from 'react';
import { connect } from 'react-redux';
import { StatusBar, StyleSheet, View } from 'react-native';
import addStore from './store/addStore';

import AppRouter, { navigationService } from './router';
import { COLOR } from './util/constants';
import { appInitAction } from './feature/appInit';

console.disableYellowBox = true; // TODO franciskone: DELETE

class App extends React.Component {
  componentDidMount() {
    this.props.appInit();
  }
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppRouter ref={ref => navigationService.setTopLevelNavigator(ref)} />
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  appInit: () => dispatch(appInitAction.init()),
});

export default addStore(connect(mapStateToProps, mapDispatchToProps)(App));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: COLOR.ULTRA_LIGHT_GRAY,
  },
});
