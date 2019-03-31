import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { MoodFace } from './MoodFace';
import { MoodSlider } from './MoodSlider';

export const MoodPickerPresentation = ({ moodLevel, setMoodLevel }) => (
  <View style={styles.container}>
    <MoodFace level={moodLevel} />
    <View style={{ height: '20%' }} />
    <MoodSlider onChange={setMoodLevel} initValue={moodLevel} />
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
    alignItems: 'center',
  },
});
