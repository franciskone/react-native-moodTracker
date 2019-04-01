import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { COLOR, STYLE } from '../../util/constants';

export const FeelingPickerItem = ({ label, onPress, isSelected }) => (
  <TouchableOpacity
    activeopacity={STYLE.TOUCHABLE_ACTIVE_OPACITY}
    onPress={onPress}
  >
    <View style={[
      styles.container,
      { backgroundColor: isSelected ? COLOR.ULTRA_LIGHT_GRAY : COLOR.WHITE },
    ]}
    >
      <Text style={styles.text}>{label}</Text>
    </View>
  </TouchableOpacity>
);

FeelingPickerItem.propTypes = {
  label: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};
FeelingPickerItem.defaultProps = {
  isSelected: false,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textTransform: 'capitalize',
    color: STYLE.TEXT.COLOR.DARK,
    paddingVertical: '9%',
  },
});
