import React from 'react';
import {
  StyleSheet, Text, SafeAreaView, View, TouchableOpacity, Keyboard, TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

import { COLOR, STYLE } from '../../util/constants';

const computedBackGroundColor = (color, overrideColor) => overrideColor || color || COLOR.DARK_GRAY;

const SideButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.sideButton}
    activeOpacity={STYLE.TOUCHABLE_ACTIVE_OPACITY}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

export const HeaderPresentation = ({
  color, overrideColor, title, subtitle, skipAction, backAction,
}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <SafeAreaView style={
    { backgroundColor: computedBackGroundColor(color, overrideColor) }
  }
  >
    <View style={styles.container}>
      <View style={styles.sideButtonContainer}>
        { backAction
        && (
          <SideButton onPress={backAction}>
            <Icon name="ios-arrow-round-back" size={30} color={COLOR.DARK_GRAY} />
          </SideButton>
        ) }
      </View>
      
      <View style={styles.mainSectionContainer}>
        <Text style={[styles.text, styles.title]}>{title}</Text>
        <Text style={[styles.text, styles.subtitle]}>{subtitle}</Text>
      </View>
      
      <View style={styles.sideButtonContainer}>
        { skipAction
          && (
          <SideButton onPress={skipAction}>
            <Text
              style={[
                styles.sideButtonText,
                { fontSize: 15 },
              ]}
            >
              skip
            </Text>
          </SideButton>
          )
        }
      </View>
    </View>
  </SafeAreaView>
  </TouchableWithoutFeedback>
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
    textAlign: 'center',
  },
  
  sideButtonContainer: {
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
    shadowColor: 'rgba(0,0,0, .3)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },
  sideButtonText: {
    color: COLOR.DARK_GRAY,
    textTransform: 'capitalize',
  },
});
