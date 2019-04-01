import React from 'react';
import {
  FlatList, StyleSheet, Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { MoodHistoryItem } from './MoodHistoryItem';

const keyExtractor = item => item.id;

export const MoodHistoryList = ({ data }) => (
  <View style={styles.container}>
    <FlatList
      data={data}
      renderItem={({ item }) => <MoodHistoryItem data={item} />}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.flatList}
    />
  </View>
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
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  flatList: {
    height: '100%',
    backgroundColor: 'purple',
  },
});
