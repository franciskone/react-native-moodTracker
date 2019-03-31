import React from 'react';
import {
  StyleSheet, Text, SafeAreaView, View, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { COLOR, STYLE } from '../../util/constants';

const computedBackGroundColor = (color, overrideColor) => overrideColor || color || COLOR.DARK_GRAY;

const SideButton = ({ label, fontSize = 15, onPress }) => (
  <TouchableOpacity
    style={styles.sideButton}
    activeOpacity={STYLE.TOUCHABLE_ACTIVE_OPACITY}
    onPress={onPress}
  >
    <Text
      style={[
        styles.sideButtonText,
        { fontSize },
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

export const HeaderPresentation = ({
  color, overrideColor, title, subtitle, skipAction, backAction,
}) => (
  <SafeAreaView style={
    { backgroundColor: computedBackGroundColor(color, overrideColor) }
  }
  >
    <View style={styles.container}>
      <View style={styles.sideButtonContainer}>
        { backAction && <SideButton label="<" onPress={backAction} /> }
      </View>
      
      <View style={styles.mainSectionContainer}>
        <Text style={[styles.text, styles.title]}>{title}</Text>
        <Text style={[styles.text, styles.subtitle]}>{subtitle}</Text>
      </View>
      
      <View style={styles.sideButtonContainer}>
        { skipAction && <SideButton label="skip" fontSize={15} onPress={skipAction} /> }
      </View>
    </View>
  </SafeAreaView>
);

HeaderPresentation.propTypes = {
  color: PropTypes.string.isRequired,
  overrideColor: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  skipAction: PropTypes.func,
  backAction: PropTypes.func,
};
HeaderPresentation.defaultProps = {
  overrideColor: null,
  subtitle: null,
  skipAction: null,
  backAction: null,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: STYLE.PADDING.LARGE,
    paddingBottom: STYLE.PADDING.XLARGE,
  },
  
  mainSectionContainer: {
    backgroundColor: 'green',
    alignItems: 'center',
    flex: 3,
  },
  text: {
    color: COLOR.WHITE,
    textTransform: 'capitalize',
  },
  title: {
    fontSize: STYLE.TEXT.FONT_SIZE.XL,
  },
  subtitle: {
    fontSize: STYLE.TEXT.FONT_SIZE.M,
    fontWeight: '200',
    marginTop: STYLE.PADDING.SMALL,
  },
  
  sideButtonContainer: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideButton: {
    width: 50,
    height: 50,
    backgroundColor: COLOR.WHITE,
    padding: STYLE.PADDING.MEDIUM,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  sideButtonText: {
    color: COLOR.DARK_GRAY,
    textTransform: 'capitalize',
  },
});
