import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { COLOR, STYLE } from '../util/constants';


export const TextArea = ({
  value, onChange, style, containerStyle, ...props
}) => (
  <View style={[styles.container, containerStyle]}>
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
  containerStyle: TextInput.propTypes.style,
};
TextArea.defaultProps = {
  style: StyleSheet.create({}),
  containerStyle: StyleSheet.create({}),
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE,
    paddingTop: STYLE.PADDING.MEDIUM,
    width: '100%',
  },
  textField: {
    flex: 1,
    justifyContent: 'center',
    padding: STYLE.PADDING.LARGE,
  },
});
