import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLOR, STYLE } from '../../util/constants';
import { MoodPicker } from '../../components/MoodPicker';

export class MoodLevelSelectScreenPresentation extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  // LifeCycle methods
  // componentWillMount() {}
  // componentDidMount() {}
  // componentWillUnmount() {}
  // componentWillReceiveProps(nextProps) {}
  // shouldComponentUpdate(nextProps, nextState) {return true}
  // componentWillUpdate(nextProps, nextState) {}
  // componentDidUpdate(prevProps, prevState) {}

  // Component methods

  render() {
    return (
      <View style={styles.screenContainer}>
        <MoodPicker />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: COLOR.ULTRA_LIGHT_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    padding: STYLE.SCREEN_PADDING,
  },
});
