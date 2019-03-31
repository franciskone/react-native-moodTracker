import React from 'react';
import {
  Keyboard, KeyboardAvoidingView, SafeAreaView, StyleSheet, View, TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import { Button, TextArea, FeelingBadgeList } from '../../components';
import { COLOR, STYLE } from '../../util/constants';
import { navigationService } from '../../router';

export const CommentScreenPresentation = ({ comment, updateComment, feelingSelectedList, checkInSave }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.screenContainer}>
      <SafeAreaView />
      <KeyboardAvoidingView
        style={styles.keyboardViewContainer}
        behavior="padding"
      >
        <View style={styles.keyboardViewContent}>
          <FeelingBadgeList list={feelingSelectedList} />
          <TextArea
            value={comment}
            onChangeText={updateComment}
            style={styles.textAreaStyle}
            placeholder="Type your optional note here..."
            placeholderTextColor={COLOR.GRAY}
          />
          <Button
            action={() => {
              checkInSave();
              navigationService.goToInsights();
            }}
            label="finish"
            style={styles.buttonStyle}
          />
        </View>
      </KeyboardAvoidingView>
      <SafeAreaView />
    </View>
  </TouchableWithoutFeedback>
);

CommentScreenPresentation.propTypes = {
  comment: PropTypes.string.isRequired,
  updateComment: PropTypes.func.isRequired,
  feelingSelectedList: PropTypes.isRequired,
  checkInSave: PropTypes.func.isRequired,
};
CommentScreenPresentation.defaultProps = {};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: COLOR.ULTRA_LIGHT_GRAY,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    padding: STYLE.SCREEN_PADDING,
  },
  keyboardViewContainer: {
    justifyContent: 'flex-end',
  },
  keyboardViewContent: {
    paddingVertical: STYLE.PADDING.LARGE,
    justifyContent: 'flex-end',
  },
  textAreaStyle: {
    fontStyle: 'italic',
  },
  buttonStyle: {
    marginTop: STYLE.PADDING.XLARGE,
  },
});
