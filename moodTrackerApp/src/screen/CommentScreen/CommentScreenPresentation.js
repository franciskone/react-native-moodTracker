import React from 'react';
import {
  Keyboard, KeyboardAvoidingView, SafeAreaView, StyleSheet, View, TouchableWithoutFeedback,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  Button, TextArea, FeelingBadgeList, Header,
} from '../../components';
import { COLOR, STYLE } from '../../util/constants';
import { navigationService } from '../../router';

const computedTextAreaStyle = value => (value == null ? { fontStyle: 'italic' } : {});

export const CommentScreenPresentation = ({
  comment, updateComment, feelingSelectedList, checkInSave,
}) => (
  <KeyboardAvoidingView
    style={styles.screenContainer}
    contentContainerStyle={styles.screenContainer}
    behavior="position"
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Header
        backAction={navigationService.goToCheckInFeeling}
        title="comments?"
        subtitle="Are there any thoughts, feelings or events you'd like to record?"
      />
    </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screenContentContainer}>
        {/* badgelist */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.feelingBadgeListContainer}>
            <FeelingBadgeList list={feelingSelectedList} />
          </View>
        </TouchableWithoutFeedback>
  
        {/* textarea */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={styles.textAreaSectionContainer}
            behavior="padding"
          >
            <TextArea
              value={comment}
              onChangeText={updateComment}
              containerStyle={styles.textAreaContainer}
              style={[computedTextAreaStyle(comment), styles.textArea]}
              placeholder="Type your optional note here..."
              placeholderTextColor={COLOR.GRAY}
            />
          </View>
        </TouchableWithoutFeedback>
      
        {/* button */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.buttonSectionContainer}>
            <Button
              action={() => {
                checkInSave();
                navigationService.goToInsights();
              }}
              label="finish"
              style={styles.buttonStyle}
            />
          </View>
        </TouchableWithoutFeedback>
  
        <SafeAreaView />
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
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
  },
  screenContentContainer: {
    flex: 1,
    padding: STYLE.PADDING.LARGE,
    backgroundColor: COLOR.ULTRA_LIGHT_GRAY,
  },
  feelingBadgeListContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textAreaSectionContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  buttonSectionContainer: {
    paddingTop: STYLE.PADDING.LARGE,
  },
});

const oldStyles = StyleSheet.create({
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
  textAreaContainer: {
    height: '40%',
  },
  textArea: {
  
  },
  buttonStyle: {
    marginTop: STYLE.PADDING.XLARGE,
  },
});
