import React from 'react';
import { connect } from 'react-redux';
import { CommentScreenPresentation } from './CommentScreenPresentation';
import { checkInSelector } from '../../feature/checkIn/checkInSelector';
import { checkInAction } from '../../feature/checkIn';

const mapStateToProps = state => ({
  comment: checkInSelector.comment(state),
  feelingSelectedList: checkInSelector.feelingSelectedEnhancedList(state),
});

const mapDispatchToProps = dispatch => ({
  updateComment: comment => dispatch(checkInAction.checkInCommentSet(comment)),
});

export const CommentScreenConnector = connect(mapStateToProps, mapDispatchToProps)(CommentScreenPresentation);
