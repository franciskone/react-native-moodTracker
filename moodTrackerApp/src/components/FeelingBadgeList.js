import React from 'react';
import {
  FlatList, StyleSheet, Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { FeelingBadge } from './FeelingBadge';
import {STYLE} from "../util/constants"


export const FeelingBadgeList = ({ list }) => (
  <View>
    <View style={styles.listContainer}>
      {list.map(item => <FeelingBadge key={item.id} data={item} />)}
    </View>
  </View>
);

FeelingBadgeList.propTypes = {
  list: PropTypes.isRequired,
};
FeelingBadgeList.defaultProps = {};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: STYLE.PADDING.SMALL,
    marginBottom: STYLE.PADDING.MEDIUM,
  }
});
