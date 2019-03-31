import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { COLOR, STYLE } from '../../util/constants';


export const FeelingBadgePresentation = ({ data: { label }, action }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={action}
  >
    <Text style={styles.label}>{label}</Text>
    <View style={styles.toggleButton}>
      <Text style={styles.toggleButtonIcon}>✕</Text>
    </View>
  </TouchableOpacity>
);

FeelingBadgePresentation.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string,
    id: PropTypes.number,
    isSelected: PropTypes.bool,
  }).isRequired,
  action: PropTypes.func.isRequired,
};
FeelingBadgePresentation.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE,
    borderRadius: STYLE.BORDER_RADIUS.SMALL,
    paddingVertical: STYLE.PADDING.SMALL,
    paddingHorizontal: STYLE.PADDING.MEDIUM,
    margin: STYLE.PADDING.SMALL,
    minWidth: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: COLOR.DARK_GRAY,
    textTransform: 'capitalize',
    paddingRight: STYLE.PADDING.MEDIUM,
  },
  toggleButton: {
    backgroundColor: COLOR.GRAY,
    color: COLOR.WHITE,
    padding: STYLE.PADDING.SMALL,
    borderRadius: 50,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleButtonIcon: {
    color: COLOR.WHITE,
    fontSize: 9,
  },
});
