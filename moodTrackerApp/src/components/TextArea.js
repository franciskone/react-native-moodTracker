import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { COLOR, STYLE } from '../util/constants';


export const TextArea = ({
  value, onChange, style, ...props
}) => (
  <View style={styles.container}>
    <TextInput
      style={[styles.textField, style]}
      onChangeText={onChange}
      value={value}
      multiline
      numberOfLines={4}
      {...props}
    />
  </View>
);

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  style: TextInput.propTypes.style,
};
TextArea.defaultProps = {
  style: StyleSheet.create({}),
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: STYLE.PADDING.LARGE,
    paddingVertical: STYLE.PADDING.MEDIUM,
    backgroundColor: COLOR.WHITE,
  },
  textField: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
  },
});
