import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import PropTypes from 'prop-types';

import { COLOR } from '../../util/constants';

export const MoodSlider = ({ onChange, initValue }) => (
  <Slider
    style={styles.sliderContainer}
    value={initValue}
    minimumValue={1}
    maximumValue={7}
    minimumTrackTintColor={COLOR.GRAY}
    maximumTrackTintColor={COLOR.GRAY}
    step={1}
    onSlidingComplete={onChange}
  />
);

MoodSlider.propTypes = {
  onChange: PropTypes.func,
  initValue: PropTypes.number,
};
MoodSlider.defaultProps = {
  onChange: () => console.warn("MoodPicker Slider requires 'onChange' prop"),
  initValue: 4,
};

const styles = StyleSheet.create({
  sliderContainer: {
    width: '100%',
    height: 40,
  },
});
