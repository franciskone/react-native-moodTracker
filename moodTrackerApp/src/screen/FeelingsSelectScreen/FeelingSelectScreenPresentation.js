import React from 'react';
import {
  StyleSheet, Text, SafeAreaView, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { FeelingPicker } from '../../components/FeelingPicker';
import { COLOR, STYLE } from '../../util/constants';
import { Button } from '../../components';
import { navigationService } from '../../router';

export const FeelingSelectScreenPresentation = () => (
  <View style={styles.screenContainer}>
    <SafeAreaView />
    <FeelingPicker />
    <View style={styles.buttonContainer}>
      <Button
        label="next"
        action={navigationService.goToCheckInComment}
      />
    </View>
    <SafeAreaView />
  </View>
);

FeelingSelectScreenPresentation.propTypes = {};
FeelingSelectScreenPresentation.defaultProps = {};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: COLOR.ULTRA_LIGHT_GRAY,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    padding: STYLE.SCREEN_PADDING,
  },
  buttonContainer: {
    marginTop: 30,
  },
});
