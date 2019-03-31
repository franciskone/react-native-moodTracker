import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from '../../components';
import { navigationService } from '../../router';
import {COLOR, STYLE} from '../../util/constants'


export const InsightsScreenPresentation = props => (
  <View style={styles.container}>
    <Text>
        InsightsScreenPresentation
    </Text>
    <Button
      label="track your feelings"
      action={navigationService.goToCheckInMood}
    />
  </View>
);

InsightsScreenPresentation.propTypes = {};
InsightsScreenPresentation.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.ULTRA_LIGHT_GRAY,
    padding: STYLE.SCREEN_PADDING,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
