import React from 'react';
import {
  FlatList, StyleSheet, Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { MoodHistoryItem } from './MoodHistoryItem';

const keyExtractor = item => item.id + Math.random();

export const MoodHistoryList = ({ data }) => (
  <FlatList
    data={data}
    renderItem={({ item }) => <MoodHistoryItem data={item} />}
    contentContainerStyle={styles.flatList}
  />
);

MoodHistoryList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    moodLevel: PropTypes.number,
    feelingSelectedList: PropTypes.arrayOf(PropTypes.string),
    comment: PropTypes.string,
    timestamp: PropTypes.number,
  })).isRequired,
};
MoodHistoryList.defaultProps = {};

const styles = StyleSheet.create({

  flatList: {
    backgroundColor: 'purple',
  },
});
