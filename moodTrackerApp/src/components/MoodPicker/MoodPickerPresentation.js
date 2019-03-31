import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { MoodFace } from './MoodFace';
import { MoodSlider } from './MoodSlider';

export const MoodPickerPresentation = ({ moodLevel, setMoodLevel }) => (
  <View style={styles.container}>
    <View style={styles.faceContainer}>
      <MoodFace level={moodLevel} />
    </View>
    <View style={styles.sliderContainer}>
      <MoodSlider onChange={setMoodLevel} initValue={moodLevel} />
    </View>
  </View>
);

MoodPickerPresentation.propTypes = {
  moodLevel: PropTypes.number,
  setMoodLevel: PropTypes.func.isRequired,
};
MoodPickerPresentation.defaultProps = {
  moodLevel: 4,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  faceContainer: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderContainer: {
    flex: 1,
    minHeight: 40,
  },
});
