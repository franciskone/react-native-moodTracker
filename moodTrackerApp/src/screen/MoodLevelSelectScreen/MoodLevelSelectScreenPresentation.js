import React from 'react';
import {
  SafeAreaView, StyleSheet, View,
} from 'react-native';
import { COLOR, STYLE } from '../../util/constants';
import { Button, Header, MoodPicker } from '../../components';
import { navigationService } from '../../router';

export class MoodLevelSelectScreenPresentation extends React.Component {
  render() {
    return (
      <>
        <Header
          title="check-in"
          subtitle="how are you feeling?"
        />
        <View style={styles.screenContainer}>
          <View style={styles.pickerContainer}>
            <MoodPicker />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              action={navigationService.goToCheckInFeeling}
              label="Next"
            />
          </View>
          <SafeAreaView />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: COLOR.ULTRA_LIGHT_GRAY,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: STYLE.SCREEN_PADDING + STYLE.PADDING.LARGE,
    paddingVertical: STYLE.SCREEN_PADDING,
  },
  pickerContainer: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
