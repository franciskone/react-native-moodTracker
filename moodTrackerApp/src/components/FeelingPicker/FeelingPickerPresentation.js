import React from 'react';
import {
  FlatList, StyleSheet, Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { COLOR } from '../../util/constants';
import { FeelingPickerItem } from './FeelingPickerItem';

const feelingPickerItemKeyExtractor = item => item.id.toString();

export const FeelingPickerPresentation = ({ feelingFullList, toggleFeeling }) => (
  <View style={styles.container}>
    <FlatList
      data={feelingFullList}
      renderItem={({ item }) => (
        <FeelingPickerItem
          keyExtractor={feelingPickerItemKeyExtractor}
          label={item.label}
          isSelected={item.isSelected}
          onPress={() => toggleFeeling(item.id)}
        />
      )}
      ItemSeparatorComponent={() => (
        <View style={{
          height: 1,
          backgroundColor: COLOR.LIGHT_GRAY,
        }}
        />
      )}
    />
  </View>
);

FeelingPickerPresentation.propTypes = {
  feelingFullList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
  })).isRequired,
  toggleFeeling: PropTypes.func.isRequired,
};
FeelingPickerPresentation.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLOR.LIGHT_GRAY,
  },
});
