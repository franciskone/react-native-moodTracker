import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { COLOR, STYLE } from '../util/constants';


export const Button = ({ action, label }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={action}
    activeOpacity={STYLE.TOUCHABLE_ACTIVE_OPACITY}
  >
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  action: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
Button.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLOR.WHITE,
    padding: STYLE.PADDING.LARGE,
    borderRadius: STYLE.BORDER_RADIUS.SMALL,
    alignItems: 'center',
  },
  label: {
    color: STYLE.TEXT.COLOR.DARK,
  },
});
